/**
 * 단축평가
 */

function getName(name) {
  if (name) {
    return name;
  } else {
    return "이름없음";
  }
  return name || "이름 없음";
}

function favoriteDog(someDog) {
  let favoriteDog;
  if (someDog) {
    favoriteDog = someDog;
  } else {
    favoriteDog = "냐옹";
  }
  return favoriteDog + "입니다.";

  // ----------------------------

  return (someDog || "냐옹") + "입니다.";
}

function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름 없음";
      }
    }
  }
  // ------------- 변경
  if (isLogin && user) {
    return user.name || "이름 없음";
  }
}
