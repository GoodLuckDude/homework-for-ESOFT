var allUsers = [
	// {username: "admin", password: "1234", groups: [allGroups[1]]},
];

var allRights = [
  // {Some properties}
];

var allGroups = [
	// {name: "admin", rights: [allRights[2]]},
];

var session;


function createUser(username, password) {
  allUsers.push({username: username, password: password, groups: []});
  return allUsers[allUsers.length-1]
};


function deleteUser(user) {
  var i = allUsers.indexOf(user);

  if (i >= 0) {
    allUsers.splice(i, 1);
    return
  }
  throw new Error('User for delete not found')
};


function users() {
  return allUsers;
};


function createGroup() {
  if (arguments[0]) {
    allGroups.push({name: arguments[0], rights: []});
    return allGroups[allGroups.length-1]
  }
  allGroups.push({rights: []});
  return allGroups[allGroups.length-1]
};


function deleteGroup(group) {
  var i = allGroups.indexOf(group);

  if (i >= 0) {
    allUsers.forEach(function(item) {
      if ( item.groups.indexOf(group) >= 0 ) {
        removeUserFromGroup(item, group);
      }
    });
    allGroups.splice(i, 1);
    return
  }
  throw new Error('Group to delete not found')
};


function groups() {
  return allGroups;
};


function addUserToGroup(user, group) {
  if ( allUsers.indexOf(user) == -1 || allGroups.indexOf(group) == -1 ) {
    throw new Error("Can't add user to group (not existing argument(s))")
  }
  user.groups.push(group);
};


function userGroups(user) {
  return user.groups
};


function removeUserFromGroup(user, group) {
  var i = allUsers.indexOf(user);
  var j = allGroups.indexOf(group);
  var k = user.groups.indexOf(group);

  if ( i == -1 ) {
    throw new Error("Can't delete user from group (user)")
  }
  if ( j == -1 ) {
    throw new Error("Can't delete user from group (group)")
  }
  if ( k == -1 ) {
    throw new Error("Can't delete user from group (user in group)")
  }
  user.groups.splice(k, 1);
};


function createRight() {
  if (arguments[0]) {
    allRights.push({name: arguments[0]});
    return allRights[allRights.length-1]
  }
  allRights.push({});
  return allRights[allRights.length-1]
};


function deleteRight(right) {
  var i = allRights.indexOf(right);

  if (i >= 0) {
    allGroups.forEach(function(item){
      if ( item.rights.indexOf(right) >= 0 ) {
        removeRightFromGroup(right, item);
      }
    });
    allRights.splice(i, 1);
    return
  }
  throw new Error('Right to delete not found')
};


function groupRights(group) {
  return group.rights
};


function rights() {
  return allRights;
};


function addRightToGroup(right, group) {
  var i = allRights.indexOf(right);
  var j = allGroups.indexOf(group);

  if ( i == -1 || j == -1 ) {
    throw new Error('Right or group not found')
  }
  group.rights.push(right);
};


function removeRightFromGroup(right, group) {
  var i = allRights.indexOf(right);
  var j = allGroups.indexOf(group);
  var k = group.rights.indexOf(right);

  if ( i == -1 ) {
    throw new Error("Can't remove right from group (right)")
  }
  if ( j == -1 ) {
    throw new Error("Can't remove right from group (group)")
  }
  if ( k == -1 ) {
    throw new Error("Can't remove right from group (rihgt in group)")
  }
  group.rights.splice(k, 1);
};


function login(username, password) {
  var answer;

  if (session) {return false}

  answer = allUsers.some(function(item){
    if ( item.username === username && item.password === password ) {
    session = item;
    return true
    }
    return false
  });
  return answer
};


function currentUser() {
  return session
};


function logout() {
  session = undefined;
};


function isAuthorized(user, right) {
  var answer;

  if ( allUsers.indexOf(user) == -1 || allRights.indexOf(right) == -1 ) {
    throw new Error("Can't is Autorized...")
  }
  answer = user.groups.some(function(item){
    return item.rights.indexOf(right) >= 0
  });
  return answer
};
