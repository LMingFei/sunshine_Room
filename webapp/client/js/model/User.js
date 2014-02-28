/**
 * Created by mingfei on 14-2-12.
 */
function User(id,full_name,email,room_ids){
    this.id=id;
    this.full_name=full_name;
    this.email=email;
    this.room_ids=room_ids
}


User.get_me = function(){
    var temp;
    $.ajax({
        url:"/me",
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

User.get_All = function(){
    var temp;
    $.ajax({
        url:"/users",
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

User.get_One = function(user_id){
    var temp;
    $.ajax({
        url:"/users/"+user_id,
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

