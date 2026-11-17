startPage();

function startPage() {
    var my_user = {
        n: "Shaurya Singh",
        job: "Programmer",
        own: "10 owned"
    };

    document.getElementById("uName").innerText = my_user.n;
     document.getElementById("uRole").innerText = my_user.job;
    document.getElementById("ownedCount").innerText = my_user.own;
}


function Course(t, cat, l) {
    this.t = t;
    this.cat = cat;
    this.l = l;
}

function makeTracker(obj1) {
    return {
        c_name: obj1.t,
        c_type: obj1.cat,
        max_l: obj1.l,
        getText: function() {
            return "Total " + this.max_l + " Lessons";
        }
    };
}

function enrollStudent(t, cat, l, b_id) {
    var c1 = new Course(t, cat, l);
    var tr = makeTracker(c1);

    document.getElementById("activeTitle").innerText = tr.c_name;
    document.getElementById("activeSub").innerText = tr.c_type;
     document.getElementById("lessonText").innerText = tr.getText();

    document.getElementById("btn1").innerText = "Enroll Now";
    document.getElementById("btn2").innerText = "Enroll Now";
    document.getElementById("btn3").innerText = "Enroll Now";

    document.getElementById(b_id).innerText = "Enrolled";
}