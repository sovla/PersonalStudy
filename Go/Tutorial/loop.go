package main

func loop() {

	// go는 for문만을 제공한다
	// for문은 다음과 같은 4가지 형태로 사용된다.

	// 1. 초기화, 조건, 후속 작업
	for i := 0; i < 10; i++ {
		println(i)
		// 0 ~ 9
	}

	// 2. 초기화, 조건 while과 비슷한 형태
	j := 0
	for j < 10 {
		println(j)
		j++
		// 0 ~ 9
	}

	// 3.infinite loop
	for {
		println("Infinite loop")
		break
	}

	// 4. range를 사용한 for문
	names := []string{"홍길동", "이순신", "강감찬"}
	for index, name := range names {
		println(index, name)
		// 0 홍길동
		// 1 이순신
		// 2 강감찬
	}

	

	// continue,break,Goto
	for i := 0; i < 10; i++ {
		if(i % 2 == 0){
			continue
		}
		if(i > 5){
			// break를 사용할 경우 for문을 빠져나간다.
			break
			

		}

		if(i == 4){
			// GOTO를 사용할 경우 지정한 레이블로 이동한다.
			goto END
		}
	}
	END:
		println("End")


	// Break with label
	i := 0
 
	L1:
		for {
		 
			if i == 0 {
				// 언뜻 코드를 보면 무한 루프처럼 보이지만
				// 실제로는 레이블이 붙은 for문을 빠져나가 OK를 출력하고 종료한다.
				break L1
			}
		}
	 
		println("OK")

		
	

	

}