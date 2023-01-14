function compareArrays(arr1, arr2) {
    if (arr1.every((el, ind, arr1) => arr1[ind] === arr2[ind] && arr1.length === arr2.length )) {
          return true 
        } else {
          return false
        }
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(el => el.gender === gender).map(el => el.age).reduce((a, b, ind, arr) => {
        a += b;
        if (ind === arr.length - 1) {
          return a / arr.length;
        }
        return a
      }, 0);
}