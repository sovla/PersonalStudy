class ReadDeliveryCategory {
  List<ModelShoppingCategory>? categories;
  ReadDeliveryCategory();

  Future<void> _getCategories() async {
    var categoriesResult = await RestAPI().shoppingCategoryList();
    if (categoriesResult.errorCode != 0) {
      throw Exception("에러 발생\n 코드 :${categoriesResult.errorCode}\n카테고리를 읽어오는데 실패했습니다.");
    }
    categories = categoriesResult.categories;
  }

  ModelShoppingCategory? findCategory(String mainCategoryName, String subCategoryName) {
    return categories!
        .firstWhereOrNull((mainCategory) =>
            mainCategory.name.replaceAll(" ", "") == mainCategoryName.replaceAll(" ", ""))
        ?.subCategories
        .firstWhereOrNull((subCategory) {
      return subCategory.subCategories
          .where((subCategory) =>
              subCategory.name.replaceAll(" ", "") == subCategoryName.replaceAll(" ", ""))
          .isNotEmpty;
    });
  }

  ModelShoppingCategory updateCategory(
      String mainCategoryName, String subCategoryName, int goodId) {
    ModelShoppingCategory category = findCategory(mainCategoryName, subCategoryName)!;

    for (var i = 0; i < category.subCategories.length; i++) {
      var dbSubCategory = category.subCategories[i];

      if (dbSubCategory.name.replaceAll(" ", "") == subCategoryName.replaceAll(" ", "")) {
        category.subCategories[i].linkedGoodsIds.add(goodId);
      }
    }
    return category;
  }
}

/// 상품 일괄 등록 엑셀 읽기
void readDeliveryExcel() async {
  try {
    ReadDeliveryCategory categoryService = ReadDeliveryCategory();
    await categoryService._getCategories();

    var categories = categoryService.categories;
    var isTest = await ypetYesNoPopup(
        title: "상품일괄 업로드",
        content: "테스트로 진행 하시겠습니까?(테스트: 실제 업로드는 진행되지 않고, 엑셀,이미지 양식이 올바른지 테스트용)",
        yesText: "테스트로 진행",
        noText: "실제 업로드");

    var pickedFile = await FilePickerWeb.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: [
          'xlsx',
          "xls",
          "jpg",
          "png",
          "jpeg",
          "webp",
          "bmp",
          "gif",
          "tif",
          "tiff",
          "raw"
        ],
        allowMultiple: true,
        withData: false, // 한번에 읽는 속성 제거
        withReadStream: true // Stream으로 읽어오기

        );

    List<AdminFileStream?> streamReadFileList = [];
    if (pickedFile == null) {
      return;
    }

    openProgressDialog(title: '처리 중');

    var excelFile = pickedFile.files.where((element) => element.name.contains("xlsx")).first;

    List<int>? bytes;

    await for (var _excelFile in excelFile.readStream!) {
      bytes = _excelFile;
    }

    var decoder = SpreadsheetDecoder.decodeBytes(bytes!);

    SpreadsheetTable table =
        decoder.tables["양식"] ?? decoder.tables["시트1"] ?? decoder.tables.values.first;

    if (table == null) {
      throw Exception("시트가 존재하지 않습니다.\n시트 명을 양식으로 적어주세요.");
    }

    if (table.rows[1][2] == "상품명") {
      List<Map<String?, dynamic>> reqDataList = [];

      for (var i = 4; i < table.rows.length; i++) {
        if (i > 2 && table.rows[i][2] == null) {
          // 3번째 줄부턴 상품명이 필수값 없을경우 루프 멈춤

          break;
        }

        var row = table.rows[i];

        if (row[18] != "일반상품") {
          // 현재 일반 상품만 등록가능 하도록 설정함
          continue;
        }

        String mainImageUrls = row[15] ?? "";
        String addImageUrls = row[16] ?? "";
        String bodyImagesUrls = row[17] ?? "";
        _checkRequired(List<int> list) {
          // 필수값 확인 Excel Row 활용
          for (var index in list) {
            if (row[index] == null) {
              throw Exception("${table.rows[1][index]}값은 필수입니다.\n오류 줄 수:${i + 1}");
            }
          }
        }

        _checkImage(String image) {
          // 이미지 .jpg 확인
          if (image.isNotEmpty) {
            // image.split(",").forEach((element) {
            //   if (!element.contains(".")) {
            //     throw Exception(
            //         "이미지 오류 발생\n오류 상품명:${row[2]} | 이미지:$image\nimage.jpg 형식을 지켜주세요.\n");
            //   }
            // });
          }
        }

        _checkRequired([0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18]);

        _checkImage(mainImageUrls);
        _checkImage(bodyImagesUrls);
        _checkImage(addImageUrls);

        var goods = ModelGoods();
        goods.title = row[2]; // (필수)상품제목
        goods.subtitle = row[3]; // (필수)상품설명
        goods.fasstoCode = row[4] ?? ""; // 파스토 상품코드
        goods.category = row[5] == "B2B" ? 0 : 1; // 0이면 B2B,1이면 B2C 기본값은 0
        goods.showMall = row[6] == "노출" ? true : false; // true 노출 false 아님
        goods.isSale = row[7] == "판매중" ? true : false; // true 판매중 false 아님
        goods.salePrice = row[8] ?? ""; // 최종 판매가
        goods.price = row[9] ?? ""; // 기본 가격
        goods.hasCount = row[10] ?? ""; // 재고
        goods.deliveryFee = row[11] ?? ""; // 배달비
        goods.deliveryCondition = row[12] ?? ""; // 배송비 조건
        goods.getPoint = row[13] ?? 0; // 포인트
        goods.goodsInfo = row[14] ?? ""; // 상품 정보

        // -------------- 이미지 처리 --------------------
        goods.mainImageUrls = [];

        var findImageStream = pickedFile.files.firstWhereOrNull(
            (element) => element.name.imageSplit(".").first == mainImageUrls.imageSplit(".").first);

        if (findImageStream != null) {
          goods.mainImageUrls.add(makeImageUrl('goods', 'title0', findImageStream.name));
        } else {
          for (var element in pickedFile.files) {
            debugPrint(element.name);
          }
          throw Exception(
              "오류발생 올바르지 않은 메인이미지 입니다.\n$mainImageUrls 이미지가 존재하지 않습니다.\n상품명 : ${row[2]}");
        }

        // 추가 대표 이미지가 있다면 추가함
        if (addImageUrls.isNotEmpty) {
          for (var i = 0; i < addImageUrls.split(",").length; i++) {
            var file = addImageUrls.split(",")[i];
            file = file.trim();
            var findImageStream = pickedFile.files.firstWhereOrNull(
                (element) => element.name.imageSplit(".").first == file.imageSplit(".").first);
            if (findImageStream != null) {
              goods.mainImageUrls.add(makeImageUrl('goods', 'title${i + 1}', findImageStream.name));
            } else {
              throw Exception("오류발생 올바르지 않은 추가이미지 입니다.\n$file 이미지가 존재하지 않습니다.\n상품명 : ${row[2]}");
            }
          }
        }

        // 상세 이미지 처리
        goods.bodyImages = [];
        var index = 0;
        for (var file in bodyImagesUrls.split(",")) {
          if (file.isNotEmpty) {
            // 공백 제거
            file = file.trim();
            file = file.contains(".") ? file.imageSplit(".").first : file;

            GoodBodyImage bodyImage = GoodBodyImage();

            var findImageStream = pickedFile.files
                .where((element) => element.name.imageSplit(".").first == file)
                .toList();

            if (findImageStream.isNotEmpty) {
              bodyImage.imageUrl = makeImageUrl('goods', 'body$index', findImageStream.first.name);

              goods.bodyImages.add(bodyImage);
            } else {
              throw Exception("오류발생 올바르지 않은 상세이미지입니다.\n$file 이미지가 존재하지 않습니다.\n상품명 : ${row[2]}");
            }
          }
          index++;
        }

        goods.kindId = row[18] == "일반상품" ? GoodKind.goods : GoodKind.none; // 상품 종류: 일반 상품

        goods.needAnimalData = row[25] == "필수";

        if (row[21] != null && row[19] == "선택형") {
          //  ----------------------- 선택형 상품 ------------------------
          String selectTitle = row[21];
          // 가격 형식 : "0,0" | 0 숫자 문자열 같이 들어옴
          String selectPrice = row[22] != null ? "${row[22]}" : "";
          // 수량 형식 : "0,0" | 0 숫자 문자열 같이 들어옴
          String selectCount = row[23] != null ? "${row[23]}" : "";
          List<GoodOptionItem> goodOptionItemList = [];

          if (selectTitle.split(",").length != selectPrice.split(",").length ||
              selectPrice.split(",").length != selectCount.split(",").length) {
            throw Exception(
                "선택 상품 관련 오류 발생\n상품명:${row[2]}\n선택 항목(선택형),가격(선택형),수량(선택형)은 쉼표를 통해 구분해주세요.");
          }

          for (var i = 0; i < selectTitle.split(",").length; i++) {
            String _title = selectTitle.split(",")[i].trim(); // title 에 공백이 생기는 경우가 있음
            int _price = int.parse(selectPrice.split(",")[i]);
            int _count = int.parse(selectCount.split(",")[i]);
            goodOptionItemList
                .add(GoodOptionItem(title: _title, addPrice: _price, hasCount: _count));
          }
          // 추가 가격 실종 건 - GoodOptionKind가 selecter로 설정되어 있어서 발생 - 해결
          goods.needOptions = [
            GoodOption(
                kind: GoodOptionKind.goods,
                title: row[20] ?? "",
                items: goodOptionItemList,
                hint: "")
          ];
        } else if (row[19] == "직접입력" && row[24] != null) {
          //  ----------------------- 직접입력 ------------------------
          goods.needOptions = [
            GoodOption(kind: GoodOptionKind.inputText, title: row[20] ?? "", hint: row[24])
          ];
        }

        //  ----------------------- 추가 상품 구성 ------------------------
        if (row[26] != null) {
          String goodsCode = "${row[26]}";
          for (var i = 0; i < goodsCode.split(",").length; i++) {
            goods.addGoodsIds = goodsCode.split(",").map((element) => int.parse(element)).toList();
          }
        }

        //  ----------------------- 카테고리 ------------------------

        String _excelMainCategoryName = row[0];
        String subCategorys = row[1];
        String _excelSubCategoryName = subCategorys.split(",").first;

        var _category = categoryService.findCategory(_excelMainCategoryName, _excelSubCategoryName);
        if (_category == null) {
          throw Exception(
              "해당되는 카테고리가 존재하지 않습니다.\n상품명 :${row[2]}|1차 카테고리:${row[0]}|2차 카테고리${row[1]}");
        }

        //  ----------------------- 상품등록 ------------------------
        reqDataList.add({
          "goods": goods,
          "category": _category,
          "row": row,
        });
      }
      if (!isTest) {
        for (var reqData in reqDataList) {
          ModelGoods goods = reqData["goods"];

          List<dynamic> row = reqData["row"];

          String mainImageUrls = row[15] ?? "";
          String addImageUrls = row[16] ?? "";
          String bodyImagesUrls = row[17] ?? "";

          await RestAPI()
              .adminGoodsAdd(AdminGoodsAddRequest(goods: goods))
              .then((goodsResponse) async {
            if (goodsResponse.errorCode == 0) {
              List<dio.MultipartFile> uploadFiles = [];

              debugPrint("mainImageUrls :$mainImageUrls");
              debugPrint("bodyImagesUrls :$bodyImagesUrls");
              for (var i = 0; i < goods.mainImageUrls.length; i++) {
                var _mainImage = goods.mainImageUrls[i];

                var fileName = i == 0 ? mainImageUrls : addImageUrls.split(",")[i - 1];
                fileName = fileName.trim();
                fileName = fileName.contains(".") ? fileName.imageSplit(".").first : fileName;
                var findImage = pickedFile.files
                    .where((element) =>
                        element.name.imageSplit(".").first == fileName.imageSplit(".").first)
                    .toList()
                    .first;

                var alerdyImage = streamReadFileList.isNotEmpty
                    ? streamReadFileList
                        .where(
                          (item) => item != null && item.fileName == fileName.imageSplit(".").first,
                        )
                        .toList()
                    : null;
                debugPrint("메인이미지 ${i + 1}번째 넣음, $fileName");

                if ((alerdyImage == null || alerdyImage.isEmpty) && findImage.bytes == null) {
                  List<int> _bytes = [];
                  await for (var _byte in findImage.readStream!) {
                    _bytes.addAll(_byte);
                  }

                  uploadFiles.add(dio.MultipartFile.fromBytes(_bytes, filename: _mainImage));
                  streamReadFileList.add(AdminFileStream(fileName: fileName, bytes: _bytes));
                } else {
                  if (alerdyImage!.isNotEmpty) {
                    uploadFiles.add(dio.MultipartFile.fromBytes(alerdyImage.first!.bytes,
                        filename: _mainImage));
                  }
                }
              }

              for (var i = 0; i < bodyImagesUrls.split(",").length; i++) {
                var _bodyImage = goods.bodyImages[i];

                var fileName = bodyImagesUrls.split(",")[i];
                fileName = fileName.trim();
                fileName = fileName.contains(".") ? fileName.imageSplit(".").first : fileName;
                var findImage = pickedFile.files
                    .where((element) =>
                        element.name.imageSplit(".").first == fileName.imageSplit(".").first)
                    .first;

                var alerdyImage = streamReadFileList.isNotEmpty
                    ? streamReadFileList
                        .where((item) =>
                            item != null && item.fileName == fileName.imageSplit(".").first)
                        .toList()
                    : null;

                if ((alerdyImage == null || alerdyImage.isEmpty) && findImage.bytes == null) {
                  List<int> _bytes = [];
                  var count = 0;
                  await for (var _byte in findImage.readStream!) {
                    _bytes.addAll(_byte);
                    debugPrint("읽는중 $count ${_bytes.length}");
                    count++;
                  }
                  debugPrint("전송 ${_bytes.length} 읽는중");
                  uploadFiles
                      .add(dio.MultipartFile.fromBytes(_bytes, filename: _bodyImage.imageUrl));

                  streamReadFileList.add(AdminFileStream(fileName: fileName, bytes: _bytes));
                } else {
                  debugPrint("상세이미지 ${i + 1}번째 넣음 Bytes, $fileName");
                  if (alerdyImage!.isNotEmpty) {
                    uploadFiles.add(dio.MultipartFile.fromBytes(
                      alerdyImage.first!.bytes,
                      filename: _bodyImage.imageUrl,
                    ));
                  }
                }
              }
              if (uploadFiles.isNotEmpty) {
                RestAPI().uploadFiles(uploadFiles);
              }

              RestAPI().adminShoppingCategoryUpdate(AdminShoppingCategoryUpdateRequest(
                  category: categoryService.updateCategory(row[0], row[1], goodsResponse.goodId!)));
            }
          });
        }
      }
      Get.back();
      categorySynchronization();
    } else {
      await ypetConfirmPopup(title: '잘못된 양식 입니다.');
      return;
    }
  } catch (e) {
    await ypetConfirmPopup(title: e.toString());

    Get.back();
  }
}