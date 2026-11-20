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

function showFav() {
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "none";
     document.getElementById("card3").style.display = "none";

    document.getElementById("courseHeading").innerText = "Favourite Course";
    document.getElementById("ownedCount").innerText = "1 favourite";

    document.getElementById("tabFav").style.color = "salmon";
    document.getElementById("tabFav").style.borderBottom = "2px solid salmon";
    document.getElementById("tabFav").style.fontWeight = "bold";

    document.getElementById("tabPop").style.color = "gray";
    document.getElementById("tabPop").style.borderBottom = "none";

    document.getElementById("sideFav").style.color = "navy";
    document.getElementById("sideFav").style.fontWeight = "bold";
    document.getElementById("sideAll").style.color = "gray";
    document.getElementById("sideAll").style.fontWeight = "normal";
}

function showAll() {
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "block";
    document.getElementById("card3").style.display = "block";

    document.getElementById("courseHeading").innerText = "All Courses";
    document.getElementById("ownedCount").innerText = "10 owned";

    document.getElementById("tabPop").style.color = "salmon";
    document.getElementById("tabPop").style.borderBottom = "2px solid salmon";
    document.getElementById("tabPop").style.fontWeight = "bold";

    document.getElementById("tabFav").style.color = "gray";
    document.getElementById("tabFav").style.borderBottom = "none";

    document.getElementById("sideAll").style.color = "navy";
    document.getElementById("sideAll").style.fontWeight = "bold";
    document.getElementById("sideFav").style.color = "gray";
    document.getElementById("sideFav").style.fontWeight = "normal";
}