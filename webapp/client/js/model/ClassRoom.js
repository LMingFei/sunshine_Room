/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoom(full_name,school_id,school_name){
    this.full_name=full_name;
    this.school_id=school_id;
    this.school_name=school_name;
    this.admin = [User.get_me()];
    this.apps=[];
    this.members=[User.get_me()];
}
ClassRoom.get_All=function(){
    var temp;
    $.ajax({
        url:"/rooms",
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}

ClassRoom.get_my_room=function(my_id){
    var all_rooms=ClassRoom.get_All();
    var my_rooms=[];
    _.each(all_rooms,function(room){
        if(room.members){
            _.each(room.members,function(user){
                if(user.id==my_id){
                    my_rooms.push(room);
                }
            })
        }
    })

    return my_rooms;
}

ClassRoom.get_One=function(room_id){
    var temp;
    $.ajax({
        url:"/rooms/"+room_id,
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}

ClassRoom.add_Apps = function(room_id,apps_ids,$http){
    _.each(apps_ids,function(app_id){
        $http.put("/rooms/"+room_id+"/apps/"+app_id)
            .success(function(response){
            }).error(function(err){
                alert(err)
            })
    })
}

ClassRoom.remove_App = function(room_id,app_id,$http){
    $http.delete("/rooms/"+room_id+"/apps/"+app_id)
        .success(function(){
        }).error(function(err){
            alert(err)
        })
}

ClassRoom.add_Members = function(room_id,users_ids,$http){
    _.each(users_ids,function(user_id){
        $http.put("/rooms/"+room_id+"/users/"+user_id)
            .success(function(response){
            }).error(function(err){
                alert(err)
            })
    })
}

ClassRoom.remove_Member = function(room_id,user_id,$http){
    $http.delete("/rooms/"+room_id+"/users/"+user_id)
        .success(function(response){
        }).error(function(err){
            alert(err)
        })
}

ClassRoom.set_Admin = function(room_id,user_id,$http){
    $http.put("/rooms/"+room_id+"/admin/"+user_id)
        .success(function(response){
            alert("设置管理员成功");
        }).error(function(err){
            alert(err)
        })
}

ClassRoom.get_apps_else = function(my_apps){
    var all_apps=App.get_All();
    return _.filter(all_apps,function(app){
        return !_.contains(_.pluck(my_apps,'id'),app.id);
    })
}

ClassRoom.get_users_else = function(my_user){
    var all_users = User.get_All();
    return _.filter(all_users,function(user){
        return !_.contains(_.pluck(my_user,'id'),user.id);
    })
}


ClassRoom.create = function(new_room,$http){

    $http.post('/rooms',new_room)
        .success(function(){
            alert('创建成功');
        }).error(function(err){
             alert(err)
})
}