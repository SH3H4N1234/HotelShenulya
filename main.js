//Identify DOM Elements

//Persoanal Information
const fullNameInput = document.getElementById("fullName");
const mobileInput = document.getElementById("mobileId");
const emailInput = document.getElementById("emailId");
const fullName2Input = document.getElementById("fullName2");
const mobileId2Input = document.getElementById("mobileId2");
const emailId2Input = document.getElementById("emailId2");

//Room Information
const roomInputType = document.getElementsByName("roomType");
const roomNumber1 = document.getElementById("numberofrooms1");
const roomNumber2 = document.getElementById("numberofrooms2");
const roomNumber3 = document.getElementById("numberofrooms3");
const extraBedInput = document.getElementById("extraBed");
const singleInput = document.getElementById("single");
const doubleInput = document.getElementById("double");
const tripleInput = document.getElementById("triple");

//Number of Member
const numofMembersInput = document.getElementsByName("numofMembers");
const numberofadultsInput = document.getElementById("numberofadults");
const numberofchildrenbelow5Input = document.getElementById("numberofchildren(below5)");
const numberofchildrenabove5Input = document.getElementById("numberofchildren(above5)");

//Duration
const entrancedateInput = document.getElementById("entrancedate");
const leavingdateInput = document.getElementById("leavingdate");
const durationt = document.getElementById("durationDays");
const timeDurationInput = document.getElementsByName("timeDuration");


// Current Cost outputs
const currentcostInput = document.getElementById("currentcost");

//Extra Req
const extraReqInput = document.getElementsByName("extraReq");
const wifiIdInput = document.getElementById("wifiId");
const poolViewInput = document.getElementById("poolView");
const gardenViewInput = document.getElementById("gardenView");


//Promo
const promocodeInput = document.getElementById("promocode");

// Book Buttons
const booknowInput = document.getElementById("booknow");
const resetformInput = document.getElementById("resetform");
const resetform2Input = document.getElementById("resetform2");
const checkloyaltyInput = document.getElementById("checkloyalty");
const checkloyalty2Input = document.getElementById("checkloyalty2");
const addfavInput = document.getElementById("addfav");
const addfav2Input = document.getElementById("addfav2");


// Outputs
const memberOutput1 = document.getElementById("memberOutput");
const currentCostOutput3 = document.getElementById("output3");
const currentcost2Output = document.getElementById("currentcost2");

// Adventure DOMs 
const otheractivitiesInput = document.getElementsByName("otheractivities");
const divlocaladultInput = document.getElementById("divlocaladult");
const divlocalkidInput = document.getElementById("divlocalkid");
const divforeignadultInput = document.getElementById("divforeignadult");
const divforeignkidInput = document.getElementById("divforeignkid");
const guideadultInput = document.getElementById("guideadult");
const guidekidInput = document.getElementById("guidekid");


//Declare variables
let fullName;
let mobile;
let email;
let roomType1;
let roomType2;
let roomType3;
let numberOfRooms1;
let numberOfRooms2;
let numberOfRooms3;
let roomCost1;
let roomCost2;
let roomCost3;
let totalrooms;
let totalRoomCost;
let numberofadults;
let numberofchildrenbelow5;
let numberofchildrenabove5;
let totalMembers;
let promocode;
let total;
let finalPayable;
let disAmount;
let extraBedNum;
let extrareq;
let wifi;
let poolView;
let advtotal;
let adventureTypes;
let divlocaladultnum;
let advCost1;
let divlocalkidnum;
let advCost2;
let divforeignadultnum;
let advCost3;
let divforeignkidnum;
let advCost4;
let guideadultnum;
let advCost5;
let guidekidnum;
let advCost6;
let divTotalMembers;
let divlocaladulttype;
let divlocalkidtype;
let divforeignadulttype;
let divforeignkidtype;
let guideadulttype;
let guidekidtype;
let earnedloyalty;


//Initializing
function initialize(){
    fullName = "";
    mobile = "";
    email = "";
    roomType1 ="";
    roomType2 ="";
    roomType3 ="";
    totalrooms = 0;
    numberOfRooms1 = 0;
    earnedloyalty = 0;
    numberOfRooms2 = 0;
    numberOfRooms3 = 0;
    roomCost1 = 0;
    roomCost2 = 0;
    roomCost3 = 0;
    totalRoomCost = 0;
    numberofadults = 0;
    numberofchildrenbelow5 = 0;
    numberofchildrenabove5 = 0;
    totalMembers = 0;
    promocode = "";
    total = 0;
    finalPayable = 0;
    disAmount = 0;
    extraBedNum = 0;
    extrareq = "";
    wifi = "";
    poolView = "";
    advtotal = 0;
    adventureTypes = "";
    divlocaladultnum = 0;
    advCost1 = 0;
    divlocalkidnum = 0;
    advCost2 = 0;
    divforeignadultnum = 0;
    advCost3 = 0;
    divforeignkidnum = 0;
    advCost4 = 0;
    guideadultnum = 0;
    advCost5 = 0;
    guidekidnum = 0;
    advCost6 = 0;
    divTotalMembers = 0;
    divlocaladulttype = "";
    divlocalkidtype = "";
    divforeignadulttype = "";
    divforeignkidtype = "";
    guideadulttype = "";
    guidekidtype = "";
}

//Event Listener
roomInputType.forEach(item => item.addEventListener("change", roomTypeFunction));
numofMembersInput.forEach(item => item.addEventListener("change", numofMembersFunction));
timeDurationInput.forEach(item => item.addEventListener("change", durationFunction));
extraReqInput.forEach(item => item.addEventListener("change", extraReqFunction));
booknowInput.addEventListener("click", promoCodeFunction);
resetformInput.addEventListener("click", resetFunction);
resetform2Input.addEventListener("click", resetFunction);
checkloyaltyInput.addEventListener("click", loyaltypointsFuntion);
addfavInput.addEventListener("click",addfavFunction);
addfav2Input.addEventListener("click", addfavFunction2);

// Adventure Event Listners
otheractivitiesInput.forEach(item => item.addEventListener("change", adventureCalFuntion))

// Funtions for Event Listners
function personalinformFunction(){
    fullName = fullNameInput.value;
    mobile = mobileInput.value;
    email = emailInput.value;
}
function roomTypeFunction(){
    if(this.value =="single"){
        roomType1 = "single";
        roomCost1 = 25000;
    } else if(this.value == "double"){
        roomType2 = "double";
        roomCost2 = 35000;
    }else{
        roomCost3 = 40000
        roomType3 = "triple";
    }
    extraBedNum = (extraBedInput.value)*8000;

    numberOfRooms1 = parseInt(roomNumber1.value);
    numberOfRooms2 = parseInt(roomNumber2.value);
    numberOfRooms3 = parseInt(roomNumber3.value);
    totalrooms = numberOfRooms1 + numberOfRooms2 + numberOfRooms3;
    totalRoomCost = (numberOfRooms1 * roomCost1) + (numberOfRooms2 * roomCost2) + (numberOfRooms3 * roomCost3) + extraBedNum;
    console.log(`${totalRoomCost}`);
    console.log(`${totalrooms}`);
    total = totalRoomCost;
    currentcostInput.innerText = `Total Room Cost : ${totalRoomCost}`;

    if (totalrooms > 3){
        earnedloyalty = totalrooms * 20;
    }
}
function numofMembersFunction(){
    numberofadults = parseInt(numberofadultsInput.value);
    numberofchildrenabove5 = parseInt(numberofchildrenabove5Input.value);
    numberofchildrenbelow5 = parseInt(numberofchildrenbelow5Input.value);

    if(numberofchildrenabove5 > 0){
        total += 5000;
    }

    totalMembers = numberofadults + numberofchildrenbelow5 + numberofchildrenabove5;
    if (isNaN(totalMembers)){
        totalMembers = 0;
    }
    console.log(`${totalMembers}`);
    memberOutput1.value = `${totalMembers}`;
}

function durationFunction(){

    entrance =  entrancedateInput.value;
    leaving = leavingdateInput.value;

    let leavingdate = new Date(leavingdateInput.value);
    let entrancedate = new Date(entrancedateInput.value);

    if (isNaN(leavingdate)){
        durationt.value = 0;
    }else if (isNaN(entrancedate)){
        durationt.value = 0;
    }
    else{
        let difference = leavingdate.getTime() - entrancedate.getTime();
        if (`${difference}` < 0){
            durationt.value = 0;
        }else{
            durationDays = difference / (1000 * 3600 * 24);
            durationt.value = `${durationDays}`;
        }
    }
}
function extraReqFunction(){
    if(this.value == "wifi"){
        if (this.checked){
            wifi = "wifi ";
        }else{
            wifi = "";
        }
    }else if (this.value == "poolView"){
        poolView = "Pool View Added ";
    }else if (this.value == "gardenView"){
        poolView = "Garden View Added ";
    }else{
        poolView = "";
    }
    extrareq = `${wifi}` + `${poolView}`;
    currentCostOutput3.innerText = `Extra requirements\n ${extrareq}`;

}
function promoCodeFunction(){
    personalinformFunction();
    promocode = promocodeInput.value;
    if(promocode === "Promo123"){
        disAmount = total * (0.05);
    }
    finalPayable = total - disAmount;
    currentCostOutput3.innerText = "";
    currentcostInput.innerText = `
    ${fullName} \n
    Order Details are as follows \n
    Selected Room Types and Entered Number of Rooms ${roomType1} ${numberOfRooms1} / ${roomType2} ${numberOfRooms2} / ${roomType3} ${numberOfRooms3} \n
    Total Room Cost : LKR ${totalRoomCost} \n
    Entered Number of Members : ${totalMembers} \n 
    Number of adults : ${numberofadults} \n
    Number of children above 5 (If number Entered LKR 5000 extra will be added) : ${numberofchildrenabove5} \n
    Number of children below 5 : ${numberofchildrenbelow5} \n
    Total Cost Including Member Cost : ${total} \n
    Added Extra Requirements : ${extrareq} \n
    Check In Date : ${entrance} \n
    Check Out Date : ${leaving} \n
    Final Payable : ${finalPayable}
    `
}
// Adventure Functions
function adventureCalFuntion(){
    divlocaladultnum = parseInt(divlocaladultInput.value);
    advCost1 = divlocaladultnum * 5000;
    divlocaladulttype = "Diving for local Adults (1 hr) - 5000LKR - ";

    divlocalkidnum = parseInt(divlocalkidInput.value);
    advCost2 = divlocalkidnum * 2000;
    divlocalkidtype = "Diving for local kids (above 5 years) - 2000LKR - ";

    divforeignadultnum = parseInt(divforeignadultInput.value);
    advCost3 = divforeignadultnum * 10000;
    divforeignadulttype = "Diving for foreign adults - 10000LKR - ";

    divforeignkidnum = parseInt(divforeignkidInput.value);
    advCost4 = divforeignkidnum * 5000;
    divforeignkidtype = "Diving for foreign kids - 5000LKR - ";

    guideadultnum = parseInt(guideadultInput.value);
    advCost5 = guideadultnum * 1000;
    guideadulttype = "Adult - 1000LKR extra will be charged - ";

    guidekidnum = parseInt(guidekidInput.value);
    advCost6 = guidekidnum * 500;
    guidekidtype = "Kids - 500LKR extra will be charged - ";

    divTotalMembers = divlocaladultnum + divlocalkidnum + divforeignadultnum + divforeignkidnum + guideadultnum + guidekidnum;
    adventureTypes = `${divlocaladulttype}` + `${divlocalkidtype}` + `${divforeignadulttype}` + `${divforeignkidtype}` + `${guideadulttype}` + `${guidekidtype}`;
    advtotal = advCost1 + advCost2 + advCost3 + advCost4 + advCost5 + advCost6;
    currentcost2Output.innerText = `
    ${divlocaladulttype} ${divlocaladultnum} \n ${divlocalkidtype} ${divlocalkidnum} \n ${divforeignadulttype} ${divforeignadultnum} \n ${divforeignkidtype} ${divforeignkidnum} \n ${guideadulttype} ${guideadultnum} \n ${guidekidtype} ${guidekidnum} \n
    ${divTotalMembers}
    LKR ${advtotal}
    `
}
function resetFunction(){
    fullNameInput.value = "";
    mobileInput.value = "";
    emailInput.value = "";
    roomNumber1.value = 0;
    roomNumber2.value = 0;
    roomNumber3.value = 0;
    singleInput.checked = false;
    doubleInput.checked = false;
    tripleInput.checked = false;
    extraBedInput.value = 0;
    numberofadultsInput.value = 0;
    numberofchildrenbelow5Input.value = 0;
    numberofchildrenabove5Input.value = 0;
    memberOutput1.value = 0;
    leavingdateInput.value = "yyyy-mm-dd";
    entrancedateInput.value = "yyyy-mm-dd";
    durationt.value = 0;
    wifiIdInput.checked = false;
    poolViewInput.checked = false;
    gardenViewInput.checked = false;
    promocodeInput.value = "";
    memberOutput1.innerText = "";
    currentCostOutput3.innerText = "";
    currentcost2Output.innerText = "";
    currentcostInput.innerText = "";
    divlocaladultInput.value = 0;
    divlocalkidInput.value = 0;
    divforeignadultInput.value = 0;
    divforeignkidInput.value = 0;
    guideadultInput.value = 0;
    guidekidInput.value = 0;
    guideadultInput.checked = false;
    guidekidInput.checked = false;
    fullName2Input.value = "";
    mobileId2Input.value = "";
    emailId2Input.value = "";
}
function loyaltypointsFuntion(){
    window.alert(`Total Loyalty : ${earnedloyalty}`);
    localStorage.setItem("loyaltyPoints", `${earnedloyalty}`);
}
function addfavFunction(){
    localStorage.setItem("fullName", `${fullName}`);
    localStorage.setItem("mobile", `${mobile}`);
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("totalrooms", `${totalrooms}`);
    localStorage.setItem("totalRoomCost", `${totalRoomCost}`);
    localStorage.setItem("totalMembers", `${totalMembers}`);
    localStorage.setItem("entrance", `${entrance}`);
    localStorage.setItem("leaving", `${leaving}`);
    localStorage.setItem("extrareq", `${extrareq}`);
    localStorage.setItem("finalPayable", `${finalPayable}`);
    window.alert("Added to Favourites Successfully");
}
function addfavFunction2(){
    let guideCost = advCost5 + advCost6
    localStorage.setItem("divTotalMembers", `${divTotalMembers}`);
    localStorage.setItem("adventureTypes", `${adventureTypes}`);
    localStorage.setItem("advtotal", `${advtotal}`);   
    localStorage.setItem("guideCost", `${guideCost}`);
    window.alert("Added to Favourites Successfully");   
}

//Add an event listener to number of rooms input
// roomNumber.addEventListener("change",updateRoomCost);

// function updateRoomCost(){
//     numberOfRooms = parseInt(roomNumber.value) || 0;
//     let totalRoomCost = roomCost * numberOfRooms;
//     console.log(`Total Room Cost: ${totalRoomCost}`);
// }

initialize();