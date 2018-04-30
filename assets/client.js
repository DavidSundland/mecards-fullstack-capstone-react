// NOTE - If the following values are changed, it could affect saved cards.  If values are added to any of these arrays, they should be ADDED TO THE END so that they do not impact saved cards.
const FONTS = ['Roboto','Tajawal','Do Hyeon','Lato','Montserrat','Hi Melody','Gugi','Raleway','Gaegu','Merriweather','Ubuntu','Black Han Sans','Playfair Display','Poppins','Gamja Flower','Inconsolata','Indie Flower','Dosis','Crimson Text','Jua','Arvo','Libre Baskerville','Cute Font','Lobster','Pacifico','Dokdo','Shadows Into Light','Dancing Script','Black And White Picture'];
const COLORS = ['white', 'black', 'maroon', 'teal', 'aqua', 'navy', '#6495ED', '#E9967A', '#FF5555', '#FF9B55', '#35A091', '#44CC44', '#FFFC55', '#BE3F9B', '#C9F251', '#8040AB', '#DE4A81', '#34959A', '#FFFF55', '#DAB8CE', 'rgba(0,0,0,.6)', 'rgba(255,255,255,.6)'];
const BORDERS = ['none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
const TEXTSTYLES = [["transparent", "none"],["transparent", "2px 2px red"],["transparent", "4px 4px red"],["transparent", "2px 2px black"],["transparent", "4px 4px black"],["transparent", "2px 2px white"],["transparent", "4px 4px white"],["transparent", "2px 2px 8px red"],["transparent", "2px 2px 8px white"],["transparent", "2px 2px 8px black"],["transparent", "0 0 3px #FF0000, 0 0 5px #0000FF"],["rgba(0,0,0,.4)", "none"],["rgba(255,255,255,.4)", "none"]];

let DEFAULTHEADER = "Header (optional)";
let DEFAULTBODY = "Body text. Header, body, & footer are all optional. If you want the header, body, and/or footer to be blank, place a space in the corresponding text box." ;
let DEFAULTFOOTER = "Footer (optional)";

let DISPLAYHEIGHT;

let LOGGEDIN = false;
let USERNAME = "";
let UPDATE = false;

// adjusts card preview height whenever screen is resized or new card is loaded
function adjustCardHeight(photoWidth, photoHeight) {
    if (window.innerWidth > 1150) { // below 1150 px, edit page goes from 1 column to 2
        DISPLAYHEIGHT = window.innerWidth*.369;
    }
    else {
        DISPLAYHEIGHT = window.innerWidth*.547;
    }
    // if width not passed, check to ensure that photoList has been created, card is active and has width
//    console.log(photoWidth, createCard.photoList[createCard.imageNumber]);
    if ((!photoWidth) && (createCard.photoList[createCard.imageNumber] !== undefined)) {
        photoWidth = createCard.photoList[createCard.imageNumber].width;
        photoHeight = createCard.photoList[createCard.imageNumber].height;
    }
    // If photoWidth is defined, adjust accordingly.  If undefined, do nothing.
    if (photoWidth) {
        if (photoWidth > 1.5*photoHeight) {  // if extra-wide photo, reduce view height proportionately so displays properly
            $("#cardBox").css("height", DISPLAYHEIGHT*1.5*photoHeight/photoWidth); // default height * standard photo ratio / actual ratio
        }
        else {
            $("#cardBox").css("height", DISPLAYHEIGHT);
        }
        // set dimensions for full-screen display:
        let previewPhotoHeight;
        let previewPhotoWidth;
        if (window.innerHeight/window.innerWidth > photoHeight/photoWidth) {
            previewPhotoWidth = window.innerWidth*.9;
            previewPhotoHeight = previewPhotoWidth*photoHeight/photoWidth;
        }
        else {
            previewPhotoHeight = window.innerHeight*.9;
            previewPhotoWidth = previewPhotoHeight*photoWidth/photoHeight;
        }
        $("#cardPreview").css("width", previewPhotoWidth);
        $("#cardPreview").css("height", previewPhotoHeight);
    }
}


// primary object for app - createCard contains all card values and most functions

let createCard = {
    titleText: "",
    bodyText: "",
    footerText: "",
    titleFontNumber: 0,
    bodyFontNumber: 0,
    footerFontNumber: 0,
    titleColorNumber: 0,
    bodyColorNumber: 0,
    footerColorNumber: 0,
    titleFontSize: 3,
    bodyFontSize: 1.5,
    footerFontSize: 3,
    titleStyleNumber: 0,
    bodyStyleNumber: 0,
    footerStyleNumber: 0,
    borderStyle: 0,
    borderColor: 0,
    borderSize: 10,
    backgroundNumber: 1,
    imageNumber: 0,
    photoList: [{photoLink: "assets/images/blackbackground.jpg", photogName: "", photogLink: "", width: 885, height: 583}],
    cardId: "",

    changeHeader: function() {
        createCard.titleText = $("#titleText").val();
        if (createCard.titleText==="") {  // if user deletes text, put the instructions back on screen
            $("#cardHeader").text(DEFAULTHEADER);
        }
        else {
            $("#cardHeader").text(createCard.titleText);
        }
    },

    changeBody: function() {
        createCard.bodyText = $("#bodyText").val();
        if (createCard.bodyText==="") {
            $("#cardBody").text(DEFAULTBODY);
        }
        else {
            $("#cardBody").text(createCard.bodyText);
        }
    },

    changeFooter: function() {
        createCard.footerText = $("#footertext").val();
        if (createCard.footerText==="") {
            $("#cardFooter").text(DEFAULTFOOTER);
        }
        else {
            $("#cardFooter").text(createCard.footerText);
        }
    },
    headerFont: function() {
        $("#nextTitleFont").click(
            function() {
                createCard.titleFontNumber++;
                if (createCard.titleFontNumber >= FONTS.length) {
                    createCard.titleFontNumber = 0;
                }
                $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
            }
        );
        $("#prevTitleFont").click(
            function() {
                createCard.titleFontNumber--;
                if (createCard.titleFontNumber < 0) {
                    createCard.titleFontNumber = FONTS.length - 1;
                }
                $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
            }
        );
    },
    bodyFont: function() {
        $("#nextBodyFont").click(
            function() {
                createCard.bodyFontNumber++;
                if (createCard.bodyFontNumber >= FONTS.length) {
                    createCard.bodyFontNumber = 0;
                }
                $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
            }
        );
        $("#prevBodyFont").click(
            function() {
                createCard.bodyFontNumber--;
                if (createCard.bodyFontNumber < 0) {
                    createCard.bodyFontNumber = FONTS.length - 1;
                }
                $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
            }
        );
    },
    footerFont: function() {
        $("#nextFooterFont").click(
            function() {
                createCard.footerFontNumber++;
                if (createCard.footerFontNumber >= FONTS.length) {
                    createCard.footerFontNumber = 0;
                }
                $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
            }
        );
        $("#prevFooterFont").click(
            function() {
                createCard.footerFontNumber--;
                if (createCard.footerFontNumber < 0) {
                    createCard.footerFontNumber = FONTS.length - 1;
                }
                $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
            }
        );
    },
    headerColor: function() {
        $("#prevTitleColor").click(
            function() {
                createCard.titleColorNumber--;
                if (createCard.titleColorNumber < 0) {
                    createCard.titleColorNumber = COLORS.length-1;
                }
                $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
            }
        );
        $("#nextTitleColor").click(
            function() {
                createCard.titleColorNumber++;
                if (createCard.titleColorNumber >= COLORS.length) {
                    createCard.titleColorNumber = 0;
                }
                $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
            }
        );
    },
    bodyColor: function() {
        $("#prevBodyColor").click(
            function() {
                createCard.bodyColorNumber--;
                if (createCard.bodyColorNumber < 0) {
                    createCard.bodyColorNumber = COLORS.length-1;
                }
                $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
            }
        );
        $("#nextBodyColor").click(
            function() {
                createCard.bodyColorNumber++;
                if (createCard.bodyColorNumber >= COLORS.length) {
                    createCard.bodyColorNumber = 0;
                }
                $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
            }
        );
    },
    footerColor: function() {
        $("#prevFooterColor").click(
            function() {
                createCard.footerColorNumber--;
                if (createCard.footerColorNumber < 0) {
                    createCard.footerColorNumber = COLORS.length-1;
                }
                $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
            }
        );
        $("#nextFooterColor").click(
            function() {
                createCard.footerColorNumber++;
                if (createCard.footerColorNumber >= COLORS.length) {
                    createCard.footerColorNumber = 0;
                }
                $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
            }
        );
    },
    headerSize: function() {
        $("#smallerTitle").click(
            function() {
                createCard.titleFontSize/=1.1;
                $("#cardHeader").css("font-size", createCard.titleFontSize + "vw");
            }
        );
        $("#largerTitle").click(
            function() {
                createCard.titleFontSize*=1.1;
                $("#cardHeader").css("font-size", createCard.titleFontSize + "vw");
            }
        );
    },
    bodySize: function() {
        $("#smallerBody").click(
            function() {
                createCard.bodyFontSize/=1.1;
                $("#cardBody").css("font-size", createCard.bodyFontSize + "vw");
            }
        );
        $("#largerBody").click(
            function() {
                createCard.bodyFontSize*=1.1;
                $("#cardBody").css("font-size", createCard.bodyFontSize + "vw");
            }
        );
    },
    footerSize: function() {
        $("#smallerFooter").click(
            function() {
                createCard.footerFontSize/=1.1;
                $("#cardFooter").css("font-size", createCard.footerFontSize + "vw");
            }
        );
        $("#largerFooter").click(
            function() {
                createCard.footerFontSize*=1.1;
                $("#cardFooter").css("font-size", createCard.footerFontSize + "vw");
            }
        );
    },
    headerStyle: function() {
        $("#prevHeaderStyle").click(
            function() {
                createCard.titleStyleNumber--;
                if (createCard.titleStyleNumber < 0) {
                    createCard.titleStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
            }
        );
        $("#nextHeaderStyle").click(
            function() {
                createCard.titleStyleNumber++;
                if (createCard.titleStyleNumber >= TEXTSTYLES.length) {
                    createCard.titleStyleNumber = 0;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
            }
        );
    },
    bodyStyle: function() {
        $("#prevBodyStyle").click(
            function() {
                createCard.bodyStyleNumber--;
                if (createCard.bodyStyleNumber < 0) {
                    createCard.bodyStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
                $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
            }
        );
        $("#nextBodyStyle").click(
            function() {
                createCard.bodyStyleNumber++;
                if (createCard.bodyStyleNumber >= TEXTSTYLES.length) {
                    createCard.bodyStyleNumber = 0;
                }
                $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
                $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
            }
        );
    },
    footerStyle: function() {
        $("#prevFooterStyle").click(
            function() {
                createCard.footerStyleNumber--;
                if (createCard.footerStyleNumber < 0) {
                    createCard.footerStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
                $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
            }
        );
        $("#nextFooterStyle").click(
            function() {
                createCard.footerStyleNumber++;
                if (createCard.footerStyleNumber >= TEXTSTYLES.length) {
                    createCard.footerStyleNumber = 0;
                }
                $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
                $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
            }
        );
    },
    borders: function() {
        $("#prevBorderStyle").click(
            function() {
                createCard.borderStyle--;
                if (createCard.borderStyle < 0) {
                    createCard.borderStyle = BORDERS.length-1;
                }
                if(createCard.borderSize < 4) { // If no border or tiny border, increase border size so visible
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
            }
        );
        $("#nextBorderStyle").click(
            function() {
                createCard.borderStyle++;
                if (createCard.borderStyle >= BORDERS.length) {
                    createCard.borderStyle = 0;
                }
                if(createCard.borderSize < 4) { // If no border or tiny border, increase border size so visible
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
            }
        );
        $("#prevBorderColor").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderColor--;
                if (createCard.borderColor < 0) {
                    createCard.borderColor = COLORS.length-1;
                }
                if(createCard.borderSize < 4) {
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-color", COLORS[createCard.borderColor]);
            }
        );
        $("#nextBorderColor").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderColor++;
                if (createCard.borderColor >= COLORS.length) {
                    createCard.borderColor = 0;
                }
                if(createCard.borderSize < 4) {
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-color", COLORS[createCard.borderColor]);
            }
        );
        $("#smallerBorder").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderSize/=1.3;
                if(createCard.borderSize < 2) {
                    createCard.borderSize = 0;
                }
                $("#photo").css("border-width", createCard.borderSize + "px");
            }
        );
        $("#largerBorder").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                    createCard.borderSize = 0;
                }
                if (createCard.borderSize === 0) {
                    createCard.borderSize = 2;
                }
                createCard.borderSize*=1.3;
                if (createCard.borderSize > 35.84) {  // set maximum size so that border doesn't get out of control
                    createCard.borderSize = 35.84;
                }
                $("#photo").css("border-width", createCard.borderSize + "px");
            }
        );
        $("#prevBackground").click(
            function() {
                createCard.backgroundNumber--;
                if(createCard.backgroundNumber < 0) {
                    createCard.backgroundNumber = COLORS.length-1;
                }
                console.log(createCard.backgroundNumber);
                $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
            }
        );
        $("#nextBackground").click(
            function() {
                createCard.backgroundNumber++;
                if (createCard.backgroundNumber >= COLORS.length) {
                    createCard.backgroundNumber = 0;
                }
                console.log(createCard.backgroundNumber);
                $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
            }
        );
    },
    getImages: function() {
        $('#querySubmit').click(function (event) {
            event.preventDefault(); // otherwise page reloads when this function starts
            let searchTerm = $("#photoQuery").val();
            $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/unsplash/:' + searchTerm, function (res) {
                if (res.total == 0) {
                    console.log("got bupkis");
                    alert(`We found no results for ${searchTerm}!`);
                } else {
                    $("#nextPhoto").addClass("makeVisibleInline");
                    $("#prevPhoto").addClass("makeVisibleInline");
                    let photoWidth = Number(res.results[0].width);
                    let photoHeight = Number(res.results[0].height);
                    if (photoWidth < 1.1*photoHeight) {
                        $(".cardBody").addClass("portraitPic");
                    }
                    else {
                        $(".cardBody").removeClass("portraitPic");
                    }
                    adjustCardHeight(photoWidth, photoHeight);
                    $("#photo").removeClass("invisible");
                    $("#photo").attr("src", res.results[0].urls.regular);  // add first photo to page
                    $("#photoCreds").removeClass("invisible");
                    $("#photoCreds").html(`<a href="${res.results[0].user.portfolio_url}" target="_blank">${res.results[0].user.name}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);  // set credit for first photo
                    createCard.photoList = [];  // clear the previous results
                    $("#photoQuery").val("");  // clear the previous results
                    for (let x=0; x<res.results.length; x++) {
                        createCard.photoList.push({photoLink: res.results[x].urls.regular, photogName: res.results[x].user.name, photogLink: res.results[x].user.portfolio_url, width: res.results[x].width, height: res.results[x].height});
                    }
                }
            });
        });
        $('#nextPhoto').click(function (event) {
            event.preventDefault();
            createCard.imageNumber++;
            if (createCard.imageNumber >= createCard.photoList.length) {
                createCard.imageNumber = 0;
            }
            let photoWidth = Number(createCard.photoList[createCard.imageNumber].width);
            let photoHeight = Number(createCard.photoList[createCard.imageNumber].height);
            if (photoWidth < 1.1*photoHeight) {
                $(".cardBody").addClass("portraitPic");
            }
            else {
                $(".cardBody").removeClass("portraitPic");
            }
            adjustCardHeight(photoWidth, photoHeight);
            $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
            $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
        });
        $('#prevPhoto').click(function (event) {
            event.preventDefault();
            createCard.imageNumber--;
            if (createCard.imageNumber < 0) {
                createCard.imageNumber = createCard.photoList.length - 1;
            }
            let photoWidth = Number(createCard.photoList[createCard.imageNumber].width);
            let photoHeight = Number(createCard.photoList[createCard.imageNumber].height);
            if (photoWidth < 1.1*photoHeight) {
                $(".cardBody").addClass("portraitPic");
            }
            else {
                $(".cardBody").removeClass("portraitPic");
            }
            adjustCardHeight(photoWidth, photoHeight);
            $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
            $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
        });
    },
}

//  setInitial card values after page load of blank card OR load of saved card

function setInitial() {
    $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
    $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
    $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
    $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
    $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
    $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
    $("#cardHeader").css("font-size", createCard.titleFontSize + "vw");
    $("#cardBody").css("font-size", createCard.bodyFontSize + "vw");
    $("#cardFooter").css("font-size", createCard.footerFontSize + "vw");
//    console.log(createCard.titleStyleNumber);
    $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
    $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
    $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
    $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
    $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
    $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
    $("#photo").css("border-color", COLORS[createCard.borderColor]);
    $("#photo").css("border-width", createCard.borderSize + "px");
    $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
    if (createCard.photoList[createCard.imageNumber].photogName !== "") {
        $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
        $("#photoCreds").removeClass("invisible");
        $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
    }
    createCard.changeHeader;
    createCard.changeBody;
    createCard.changeFooter;
}

// start a new card
function startAnew(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to start a new card and lose any unsaved changes?")) {
        createCard.titleText = "";
        createCard.bodyText = "";
        createCard.footerText = "";
        createCard.titleFontNumber = 0;
        createCard.bodyFontNumber = 0;
        createCard.footerFontNumber = 0;
        createCard.titleColorNumber = 0;
        createCard.bodyColorNumber = 0;
        createCard.footerColorNumber = 0;
        createCard.titleFontSize = 3;
        createCard.bodyFontSize = 1.5;
        createCard.footerFontSize = 3;
        createCard.titleStyleNumber = 0;
        createCard.bodyStyleNumber = 0;
        createCard.footerStyleNumber = 0;
        createCard.borderStyle = 0;
        createCard.borderColor = 0;
        createCard.borderSize = 10;
        createCard.backgroundNumber = 1;
        createCard.imageNumber = 0;
        createCard.photoList = [{photoLink: "assets/images/blackbackground.jpg", photogName: "", photogLink: "", width: 885, height: 583}];
        createCard.cardId = "";
        $("#cardHeader").text(DEFAULTHEADER); // clear existing values from preview
        $("#cardBody").text(DEFAULTBODY);
        $("#cardFooter").text(DEFAULTFOOTER);
        $("#photo").attr("src", "");  // clear user entry fields
        $("#photoCreds").addClass("invisible");
        $("#photoCreds").html("");
        $("#titleText").val("");
        $("#bodyText").val("");
        $("#footertext").val("");
        $("#photoQuery").val("");
        $("#cardPickup").addClass("invisible"); // hide elements not relevant to blank page
        $("#nextPhoto").removeClass("makeVisibleInline");
        $("#prevPhoto").removeClass("makeVisibleInline");
        $("#saveChanges").text("SAVE CARD");
        setInitial();
    }
}


// open the full-screen card preview

function viewCard() {
    let previewWidth = Number(createCard.photoList[createCard.imageNumber].width);
    let previewHeight = Number(createCard.photoList[createCard.imageNumber].height);
    if (previewWidth < 1.1*previewHeight) {
        $("#previewBody").addClass("portraitPic");
    }
    else {
        $("#previewBody").removeClass("portraitPic");
    }
    adjustCardHeight(previewWidth, previewHeight);
    $("#previewParent").removeClass("invisible");
    $("#previewHeader").text(createCard.titleText);
    $("#previewBody").text(createCard.bodyText);
    $("#previewFooter").text(createCard.footerText);
    $("#previewHeader").css("font-family", FONTS[createCard.titleFontNumber]);
    $("#previewBody").css("font-family", FONTS[createCard.bodyFontNumber]);
    $("#previewFooter").css("font-family", FONTS[createCard.footerFontNumber]);
    $("#previewHeader").css("color", COLORS[createCard.titleColorNumber]);
    $("#previewBody").css("color", COLORS[createCard.bodyColorNumber]);
    $("#previewFooter").css("color", COLORS[createCard.footerColorNumber]);
    $("#previewHeader").css("font-size", createCard.titleFontSize + "vw");
    $("#previewBody").css("font-size", createCard.bodyFontSize + "vw");
    $("#previewFooter").css("font-size", createCard.footerFontSize + "vw");
    $("#previewHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
    $("#previewHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
    $("#previewBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
    $("#previewBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
    $("#previewFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
    $("#previewFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
    $("#cardPreview").css("border-style", BORDERS[createCard.borderStyle]);
    $("#cardPreview").css("border-color", COLORS[createCard.borderColor]);
    $("#cardPreview").css("border-width", createCard.borderSize + "px");
    $("#previewParent").css("background-color", COLORS[createCard.backgroundNumber]);
    $("#cardPreview").css("background", `url('${createCard.photoList[createCard.imageNumber].photoLink}')`);
    $("#cardPreview").css("background-repeat", "no-repeat");
    $("#cardPreview").css("background-size", "cover");
    $("#previewCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
}

function closePreview() {
    $("#previewParent").addClass("invisible");
}

// Save a card:
function saveCard() {
    let photo, photographer, photoUrl, width, height;
    if (!createCard.photoList[createCard.imageNumber]) {
        // no photo selected
        photo = "";
        photographer = "";
        photoUrl = "";
        width = "0";
        height= "0";
    }
    else  {
        photo = createCard.photoList[createCard.imageNumber].photoLink;
        photographer = createCard.photoList[createCard.imageNumber].photogName;
        photoUrl = createCard.photoList[createCard.imageNumber].photogLink;
        width = createCard.photoList[createCard.imageNumber].width;
        height = createCard.photoList[createCard.imageNumber].height;
    }
    let cardArray = {
        userName: USERNAME,
        title: createCard.titleText,
        body: createCard.bodyText,
        footer: createCard.footerText,
        titleFont: createCard.titleFontNumber,
        bodyFont: createCard.bodyFontNumber,
        footerFont: createCard.footerFontNumber,
        titleColor: createCard.titleColorNumber,
        bodyColor: createCard.bodyColorNumber,
        footerColor: createCard.footerColorNumber,
        titleSize: createCard.titleFontSize,
        bodySize: createCard.bodyFontSize,
        footerSize: createCard.footerFontSize,
        titleStyle: createCard.titleStyleNumber,
        bodyStyle: createCard.bodyStyleNumber,
        footerStyle: createCard.footerStyleNumber,
        borderStyle: createCard.borderStyle,
        borderColor: createCard.borderColor,
        borderWidth: createCard.borderSize,
        backgroundColor: createCard.backgroundNumber,
        photo: photo,
        photographer: photographer,
        photoUrl: photoUrl,
        width: width,
        height: height
    };
    if(UPDATE) {
        $.ajax({
            type: 'PUT',
            url: 'https://mecards-fullstack-capstone.herokuapp.com/update/' + createCard.cardId,
            data: JSON.stringify(cardArray),
            contentType: 'application/json'
        })
            .done(function (result) {
            console.log("card updated:", result);
            myAlert(`Your mE-Card has been updated!`);
        })
            .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'https://mecards-fullstack-capstone.herokuapp.com/create',
            dataType: 'json',
            data: JSON.stringify(cardArray),
            contentType: 'application/json'
        })
            .done(function (result) {
            console.log("new card saved:", result);
            let cardLink = `https://mecards-fullstack-capstone.herokuapp.com/creations/${result._id}`;
            $("#cardPickup").html(`Click <span id="linkToCopy">here</span> for link to saved card`);
            let copyLink = document.querySelector('#linkToCopy');
            copyLink.addEventListener('click', function(event) {
                copyTextToClipboard(cardLink);
            });
            $("#allCards").removeClass("invisible");
            $("#newCard").removeClass("invisible");
            $("#cardPickup").removeClass("invisible");
            window.location = "#cardPickup";
            myAlert(`Your mE-Card has been saved!<br>A link to the card will now be available on the card edit page.`);
        })
            .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    }
}

function copyTextToClipboard(text) {
    // code credited to Dean Taylor via stackoverflow:  https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    // text added to clipboard from small, invisible part of DOM
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Attempt to copy text to clipboard was ' + msg);
        alert("The link has been copied to your computer's clipboard.");
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}

//
//var copyBobBtn = document.querySelector('.js-copy-bob-btn'),
//    copyJaneBtn = document.querySelector('.js-copy-jane-btn');
//
//copyBobBtn.addEventListener('click', function(event) {
//    copyTextToClipboard('Bob');
//});
//
//
//copyJaneBtn.addEventListener('click', function(event) {
//    copyTextToClipboard('Jane');
//});













function copyThis(clickId, copyId) {
    console.log("first values:", clickId, copyId);
    $(document).on('click', clickId, function(event) {
        event.preventDefault();
        let copyText = document.getElementById(copyId);
        copyText.select();
        document.execCommand("Copy");
    });
}
// Code to create new user:

//$('#newUser').on('submit', function (event) {
$(document).on('click', '#newUserSubmit', function (event) {
    event.preventDefault();
    const uname = $('input[name="userName"]').val();
    const pw = $('input[name="password"]').val();
    const confirmPw = $('input[name="passwordConfirm"]').val();
    //    $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/checkusername/' + uname, function (res) {
//        alert(res);
//        console.log("result from username check:", res);
//    });
    if (pw !== confirmPw) {
        alert('Passwords must match!');
    } else if (uname.length === 0) {
        alert('You must enter a username!');
    } else if (pw.length < 6) {
        alert('Your password must have at least 6 characters!');
    } else if (/\s/.test(uname) || /\s/.test(pw)) {
        alert("Sorry, usernames & passwords cannot contain spaces!");
    } else {
        const newUserObject = {
            username: uname,
            password: pw
        };
        // will assign a value to variable 'user' in signin step below
        // AJAX call to send form data up to server/DB and create new user
        $.ajax({
            type: 'POST',
            url: 'https://mecards-fullstack-capstone.herokuapp.com/users/create',
            dataType: 'json',
            data: JSON.stringify(newUserObject),
            contentType: 'application/json'
        })
            .done(function (result) {
            alert(`Thanks for signing up, ${uname}! You may now sign in with your username and password.`, 'ok');
            console.log(result);
            $('input[name="userName"]').val(""); // clear the input fields
            $('input[name="password"]').val("");
            $('input[name="passwordConfirm"]').val("");
            $('.newUser').addClass('invisible');
            $('.login').removeClass('invisible');
        })
            .fail(function (jqXHR, error, errorThrown) {
            alert("Uh-oh, something went wrong! Try a different username.");
            $('input[name="userName"]').val(""); // clear the input fields
            $('input[name="password"]').val("");
            $('input[name="passwordConfirm"]').val("");
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    };
});


function addCard() {
    $('.prevCards').addClass('invisible');
    $('.userCard').removeClass('invisible');
//    $("#otherOptions").removeClass("invisible");
    $("#allCards").removeClass("invisible");
}

function getCardList() {
    $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/findcards/' + USERNAME, function (res) {
        if (res.results.length === 0) { // no results - no saved cards
            $('.userCard').removeClass('invisible');
//            $("#otherOptions").removeClass("invisible");
        } else {
            console.log(res);
            $('.prevCards').removeClass('invisible');
            $('#prevCards').html(""); // clear previous results, if any
            for (let x=0; x < res.results.length; x++) {
                $('#prevCards').append(`<div class="row"><div class="col-4"><div class="prevCardsBackground" style="background-color: ${res.results[x].backgroundColor}"><img src="${res.results[x].photo}"></div></div><div class="col-6 prevCardsText">${res.results[x].title}</div><input type="hidden" id="${res.results[x]._id}" class="userCardsIdValue" value="${res.results[x]._id}"><div class="col-2"><button class="userCards">Edit</button></div></div>`);
            }
        }
    });
}


// Code to log user in:

$(document).on('click', '#loginClicked', function (event) {
//    alert("loginClicked clicked");
    event.preventDefault();
    // AJAX call to validate login info and sign user in
    const inputUname = $('input[name="signinUserName"]').val();
    const inputPw = $('input[name="signinPassword"]').val();
    // check for spaces, empty, undefined
    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
        alert('You entered an invalid username');
    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
        alert('You entered an invalid password');
    } else {
        const unamePwObject = {
            username: inputUname,
            password: inputPw
        };
        user = inputUname;
        $.ajax({
            type: "POST",
            url: "https://mecards-fullstack-capstone.herokuapp.com/signin",
            dataType: 'json',
            data: JSON.stringify(unamePwObject),
            contentType: 'application/json'
        })
            .done(function (result) {
            LOGGEDIN = true;
            USERNAME = user;
            $('input[name="signinUserName"]').val("");
            $('input[name="signinPassword"]').val("");
            $('.intro').addClass('invisible');
            $('#login').addClass('invisible');
            alert(`Welcome, ${user}!  You're now logged in!`);
            getCardList();
        })
            .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
            alert('You entered an invalid username and password combination. Please check your username and password and try again.');
        });
    };
});

// edit saved card
$(document).on('click', '.userCards', function(event) {
    event.preventDefault();
    createCard.cardId = $(this).parent().parent().find(".userCardsIdValue").val();
    $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/onecard/' + createCard.cardId, function (res) {
        console.log("card info:", res);
        let photoWidth = Number(res.results.width);
        let photoHeight = Number(res.results.height);
        if (photoWidth < 1.1*photoHeight) {
            $(".cardBody").addClass("portraitPic");
        }
        else {
            $(".cardBody").removeClass("portraitPic");
        }
        adjustCardHeight(photoWidth, photoHeight);
        createCard.titleText = res.results.title;
        createCard.bodyText = res.results.body;
        createCard.footerText = res.results.footer;
        createCard.titleFontNumber = Number(res.results.titleFont);
        createCard.bodyFontNumber = Number(res.results.bodyFont);
        createCard.footerFontNumber = Number(res.results.footerFont);
        createCard.titleColorNumber = Number(res.results.titleColor);
        createCard.bodyColorNumber = Number(res.results.bodyColor);
        createCard.footerColorNumber = Number(res.results.footerColor);
        createCard.titleFontSize = Number(res.results.titleSize);
        createCard.bodyFontSize = Number(res.results.bodySize);
        createCard.footerFontSize = Number(res.results.footerSize);
        createCard.titleStyleNumber = Number(res.results.titleStyle);
        createCard.bodyStyleNumber = Number(res.results.bodyStyle);
        createCard.footerStyleNumber = Number(res.results.footerStyle);
        createCard.borderStyle = Number(res.results.borderStyle);
        createCard.borderColor = Number(res.results.borderColor);
        createCard.borderSize = Number(res.results.borderWidth);
        createCard.backgroundNumber = Number(res.results.backgroundColor);
        createCard.imageNumber = 0;
        createCard.photoList = [{photoLink: res.results.photo, photogName: res.results.photographer, photogLink: res.results.photoUrl, width: res.results.width, height: res.results.height}];
        $('.userCard').removeClass('invisible');
        $('.newUser').addClass('invisible');
        $('.prevCards').addClass('invisible');
//        console.log("photoList:", createCard.photoList);
        $("#titleText").val(createCard.titleText);
        $("#cardHeader").text(createCard.titleText);
        $("#bodyText").val(createCard.bodyText);
        $("#cardBody").text(createCard.bodyText);
        $("#footertext").val(createCard.footerText);
        $("#cardFooter").text(createCard.footerText);
        $("#saveChanges").text("UPDATE CARD");
        let cardLink = `https://mecards-fullstack-capstone.herokuapp.com/creations/${createCard.cardId}`;
        $("#cardPickup").html(`Click <span id="linkToCopy">here</span> for link to saved card`);
        let copyLink = document.querySelector('#linkToCopy');
        copyLink.addEventListener('click', function(event) {
            copyTextToClipboard(cardLink);
        });
        $("#cardPickup").removeClass("invisible");
//        $("#otherOptions").removeClass("invisible");
        $("#allCards").removeClass("invisible");
        $("#newCard").removeClass("invisible");
        UPDATE = true;
        setInitial();
    });
    console.log("clicked button", createCard.cardId); // MAKE GET CALL TO ID
});

// open saved card full-screen
function displayCard() {
    $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/creations/' + createCard.cardId, function (res) {
        console.log("card info:", res);
        createCard.titleText = res.results.title;
        createCard.bodyText = res.results.body;
        createCard.footerText = res.results.footer;
        createCard.titleFontNumber = Number(res.results.titleFont);
        createCard.bodyFontNumber = Number(res.results.bodyFont);
        createCard.footerFontNumber = Number(res.results.footerFont);
        createCard.titleColorNumber = Number(res.results.titleColor);
        createCard.bodyColorNumber = Number(res.results.bodyColor);
        createCard.footerColorNumber = Number(res.results.footerColor);
        createCard.titleFontSize = Number(res.results.titleSize);
        createCard.bodyFontSize = Number(res.results.bodySize);
        createCard.footerFontSize = Number(res.results.footerSize);
        createCard.titleStyleNumber = Number(res.results.titleStyle);
        createCard.bodyStyleNumber = Number(res.results.bodyStyle);
        createCard.footerStyleNumber = Number(res.results.footerStyle);
        createCard.borderStyle = Number(res.results.borderStyle);
        createCard.borderColor = Number(res.results.borderColor);
        createCard.borderSize = Number(res.results.borderWidth);
        createCard.backgroundNumber = Number(res.results.backgroundColor);
        createCard.imageNumber = 0;
        createCard.photoList = [{photoLink: res.results.photo, photogName: res.results.photographer, photogLink: res.results.photoUrl, width: res.results.width, height: res.results.height}];
        $('.userCard').removeClass('invisible');
        $('.newUser').addClass('invisible');
        $('.prevCards').addClass('invisible');
//        $("#otherOptions").removeClass("invisible");
        $("#allCards").removeClass("invisible");
        $("#newCard").removeClass("invisible");
//        console.log("photoList:", createCard.photoList);
        $("#titleText").val(createCard.titleText);
        $("#cardHeader").text(createCard.titleText);
        $("#bodyText").val(createCard.bodyText);
        $("#cardBody").text(createCard.bodyText);
        $("#footertext").val(createCard.footerText);
        $("#cardFooter").text(createCard.footerText);
        setInitial();
    });
}

function createNewUser(event) {
    console.log("hi from createNewUser");
    event.preventDefault(); // otherwise page reloads when this function starts
    $('.login').addClass('invisible');
    $('.newUser').removeClass('invisible');
}

$('.newUser').on('click', '#cancelNewUser', function () {
    $('input[name="userName"]').val(""); // clear the input fields
    $('input[name="password"]').val("");
    $('input[name="passwordConfirm"]').val("");
    $('.newUser').addClass('invisible');
    $('.jsHide').removeClass("invisible");
});


//<div class="myAlert invisible">
//    <div class="myAlertBox">
//        <h2>Your previous cards:</h2>
//<div id="prevCards">
//    </div>
//</div>
//<button id="oldUserNewCard">New Card</button>
//</div>

function myAlert(askThis) {
    $("#myAlert").removeClass("invisible");
    $(".putAlertHere").html(`<p>${askThis}</p><button id='yes'>OKAY!</button>`);
    $("#myAlert").on('click', '#yes', function () {
        event.preventDefault();
        $("#myAlert").addClass("invisible");
        $(".putAlertHere").html("");
    });
}


//function myAlert(askThis, firstButton, secondButton, thirdButton) {
//    $(".alertBoxContainer").removeClass("invisible");
//    let partOne = `<h2>${askThis}</h2>`;
//    let partTwo = `<button>${firstButton}</button>`;
//    let partThree;
//    if (secondButton) {
//        partThree = `<button>${secondButton}</button>`;
//    }
//    else {
//        partThree = "";
//    }
//
////    $(".alertBox").addClass("visibleAlert");
//    $(".alertBox").html(askThis + `<br><button id='yes'>${thisReason}</button>`);
//    $(".alertBox").on('click', '#yes', function () {
//        event.preventDefault();
//        $(".alertBoxContainer").removeClass("visibleAlert");
//        $(".alertBox").removeClass("visibleAlert");
//        $(".alertBox").html("");
//    });
//}


$(document).ready(function () {
    let urlcheck = window.location.href;
    if (urlcheck.split('/creations/')[1]) {    // If endpoint includes /creations/ + additional text, then it is a saved card
        displaySavedCard(urlcheck.split('/creations/')[1]);
    }
    else {
        $(setInitial);
        window.onresize = function() {adjustCardHeight()};

        //        window.onresize = function() {DISPLAYHEIGHT = window.innerWidth*.369};
        $(document).on('click', '#newUserButton', createNewUser);
        $(document).on('click', '#preview', viewCard);
        $(document).on('click', '#closePreview', closePreview);
        $(document).on('click', '#saveChanges', saveCard);
        $(document).on('click', '#newCard', startAnew);
        $(document).on('click', '#oldUserNewCard', addCard);
        $(document).on('click', '#allCards', function() {if (confirm("Did you save any changes that you wanted to keep?")) {getCardList()}});
        $(createCard.getImages);
        $(createCard.headerFont);
        $(createCard.bodyFont);
        $(createCard.footerFont);
        $(createCard.headerColor);
        $(createCard.bodyColor);
        $(createCard.footerColor);
        $(createCard.headerSize);
        $(createCard.bodySize);
        $(createCard.footerSize);
        $(createCard.borders);
        $(createCard.headerStyle);
        $(createCard.bodyStyle);
        $(createCard.footerStyle);
    }
});


// CODE FOR SHARED CARD -----------------------------------------------------------------------------------------------
//https://mecards-fullstack-capstone.herokuapp.com/creations/5adcb68ee6d7ec1de48e45c0

function displaySavedCard(cardId) {
    $.getJSON('https://mecards-fullstack-capstone.herokuapp.com/showsave/' + cardId, function (res) {
//        console.log("card info:", res);
//        console.log(createCard.photoList);
        width = Number(res.results.width);
        height = Number(res.results.height);
        console.log(createCard);
        if (width < 1.1*height) {
            $("#previewBody").addClass("portraitPic");
        }
        else {
            $("#previewBody").removeClass("portraitPic");
        }
        window.onresize = function() {adjustCardHeight(width, height)};
        adjustCardHeight(width, height);
        $("#previewParent").removeClass("invisible");
        $("#previewHeader").text(res.results.title);
        $("#previewBody").text(res.results.body);
        $("#previewFooter").text(res.results.footer);
        $("#previewHeader").css("font-family", FONTS[res.results.titleFont]);
        $("#previewBody").css("font-family", FONTS[res.results.bodyFont]);
        $("#previewFooter").css("font-family", FONTS[res.results.footerFont]);
        $("#previewHeader").css("color", COLORS[res.results.titleColor]);
        $("#previewBody").css("color", COLORS[res.results.bodyColor]);
        $("#previewFooter").css("color", COLORS[res.results.footerColor]);
        $("#previewHeader").css("font-size", res.results.titleSize + "vw");
        $("#previewBody").css("font-size", res.results.bodySize + "vw");
        $("#previewFooter").css("font-size", createCard.footerFontSize + "vw");
        $("#previewHeader").css("text-shadow", TEXTSTYLES[res.results.titleStyle][1]);
        $("#previewHeader").css("background-color", TEXTSTYLES[res.results.titleStyle][0]);
        $("#previewBody").css("text-shadow", TEXTSTYLES[res.results.bodyStyle][1]);
        $("#previewBody").css("background-color", TEXTSTYLES[res.results.bodyStyle][0]);
        $("#previewFooter").css("text-shadow", TEXTSTYLES[res.results.footerStyle][1]);
        $("#previewFooter").css("background-color", TEXTSTYLES[res.results.footerStyle][0]);
        $("#cardPreview").css("border-style", BORDERS[res.results.borderStyle]);
        $("#cardPreview").css("border-color", COLORS[res.results.borderColor]);
        $("#cardPreview").css("border-width", res.results.borderWidth + "px");
        $("#previewParent").css("background-color", COLORS[res.results.backgroundColor]);
        $("#cardPreview").css("background", `url('${res.results.photo}')`);
        $("#cardPreview").css("background-repeat", "no-repeat");
        $("#cardPreview").css("background-size", "cover");
        $("#previewCreds").html(`<a href="${res.results.photoUrl}" target="_blank">${res.results.photographer}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
    });
}

