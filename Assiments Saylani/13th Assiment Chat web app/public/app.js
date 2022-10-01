let myName = prompt("Enter your Name");
// console.log(myName)
let sendMessage = () => {
    let message = document.getElementById("message").value
    console.log(message)
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });
    let message1 = document.getElementById("message")
    message1.value = ""
    // console.log(message1)
    return false;
}

firebase.database().ref("messages").on("child_added", function (datashot) {
    var html = "";
    // give each message a unique Id
    html += "<li id = 'message-" + datashot.key + "'>";
    // Show delete button if message is sent by me or sender
    if (datashot.val().sender == myName) {
        html += "<button data-id='" + datashot.key + "'onclick='deleteMessage(this);'>";   
        html += "Delete";
        html += "</button>"
    }
    html += "{ " + datashot.val().sender + " }" + datashot.val().message
    html += "</li>"
    document.getElementById("messages").innerHTML += html;
});


let deleteMessage = (self) => {
    // get message id
    var messageId = self.getAttribute("data-id");

    //delete message
    firebase.database().ref("messages").child(messageId).remove();


    firebase.database().ref("message").on("child_removed", function (datashot) {
        //remove message node

        document.getElementById("message-" + datashot.key).innerHTML + "This message has been removed";
    })
}
