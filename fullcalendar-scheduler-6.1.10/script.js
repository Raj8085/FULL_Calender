// var resouces = [
//     {
//         id: 'a',
//         title: 'Doctor A'
//     },
//     {
//         id: 'b',
//         title: 'Doctor B'
//     }
// ];

// var events = [
//     {
//         title: 'Rajeev',
//         start: '2023-12-29T10:00:00',
//         end: '2023-12-29T14:30:00',
//         description: 'Lecture',
//         resourceId: 'b'
//     },
//     {
//         title: 'Rajeev',
//         start: '2023-12-29T10:00:00',
//         end: '2023-12-29T14:30:00',
//         description: 'Lecture',
//         resourceId: 'a',

//     }
// ]
//     var calendarEl = document.getElementById("calendar");

// var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'resourceTimeGridDay',
//     resources: resouces,
//     allDaySlot: false,
//     events: events,
//     editable: true,
//     eventOverlap: true,
//     eventBackgroundColor: 'grey',
//     eventTextColor: 'white',
//     eventBorderColor: 'black',

// });

// calendar.render();  



// var resources = [
//     {
//         id: 'a',
//         title: 'Doctor A'
//     },
//     {
//         id: 'b',
//         title: 'Doctor B'
//     }
// ];

// var events = [
//     {
//         title: 'Rajeev',
//         start: '2023-12-29T10:00:00',
//         end: '2023-12-29T14:30:00',
//         description: 'Lecture',
//         resourceId: 'b'
//     },
//     {
//         title: 'Rajeev',
//         start: '2023-12-29T10:00:00',
//         end: '2023-12-29T14:30:00',
//         description: 'Lecture',
//         resourceId: 'a',
//     }
// ];

// var calendarEl = document.getElementById("calendar");

// var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'resourceTimeGridDay',
//     resources: resources,
//     allDaySlot: false,
//     events: events,
//     editable: true,
//     eventOverlap: true,
//     eventBackgroundColor: 'grey',
//     eventTextColor: 'white',
//     eventBorderColor: 'black',
// });

// calendar.render();


// function addEvent() {
//     var newEvent = {
//         title: 'New Event',
//         start: '2023-12-29T15:00:00',
//         end: '2023-12-29T16:00:00',
//         description: 'New Lecture',
//         resourceId: 'a'
//     };
//     calendar.addEvent(newEvent);
// }

// calendar.setOption('eventClick', function(info) {
//     alert('Event: ' + info.event.title);
//     alert('Resource ID: ' + info.event.extendedProps.resourceId);
   
// });

// calendar.setOption('resourceClick', function(info) {
//     alert('Resource ID: ' + info.resource.id);
//     alert('Resource Title: ' + info.resource.title);
 
// });
 

var resources = [
    {
        id: 'a',
        title: 'Doctor'
    },
    {
        id: 'b',
        title: 'Patient'
    }
];

var events = [
    {
        title: 'Rajeev',
        start: '2023-12-29T10:00:00',
        end: '2023-12-29T14:30:00',
        description: 'Lecture',
        resourceId: 'b'
    },
    {
        title: 'Rajeev',
        start: '2023-12-29T10:00:00',
        end: '2023-12-29T14:30:00',
        description: 'Lecture',
        resourceId: 'a',
    }
];

var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    resources: resources,
    allDaySlot: false,
    events: events,
    editable: true,
    eventOverlap: true,
    eventBackgroundColor: 'grey',
    eventTextColor: 'white',
    eventBorderColor: 'black',
});

calendar.render();

function changeView(view) {
    calendar.changeView(view);
}


function addEvent() {
        var eventName = document.getElementById('eventName').value;
        var eventStart = document.getElementById('eventStart').value;
        var eventEnd = document.getElementById('eventEnd').value;
         
    
        var newEvent = {
            title: eventName,
            start: eventStart,
            end: eventEnd,
            description: 'New Lecture',
            resourceId: 'a'
        };
         
        calendar.addEvent(newEvent);
         
    }
    

    function addEvent22() {
        var pName = document.getElementById('pName').value;
        var es = document.getElementById('es').value;
        var e1 = document.getElementById('e1').value;
        // var er = document.getElementById('er').value;
    
        var neww = {
            title: pName,   
            start: es,
            end: e1,
            description: 'New Lecture',
            resourceId: 'b'
            
        };
         
        calendar.addEvent(neww);
    }
 
    
function toggleEventForm() {
    var eventForm = document.getElementById('eventForm');
    eventForm.style.display = eventForm.style.display === 'none' ? 'block' : 'none';

}
function toggleform() {
    var eventt = document.getElementById('eventt');
    eventt.style.display = eventt.style.display === 'none' ? 'block' : 'none';

}
 



















// function changeView(view) {
//     calendar.changeView(view);
// }

// function addEvent() {
//     var eventName = document.getElementById('eventName').value;
//     // var eventStart = document.getElementById('eventStart').value;
//     // var eventEnd = document.getElementById('eventEnd').value;
//     // var eventResource = document.getElementById('eventResource').value;

//     // var formattedEventStart = new Date(eventStart.replace("T", " "));
//     // var formattedEventEnd = new Date(eventEnd.replace("T", " "));

//     var newEvent = {
//         title: eventName,
//         // start: formattedEventStart,
//         // end: formattedEventEnd,
//         // resourceId: eventResource
//     };

//     console.log(newEvent);

//     calendar.addEvent(newEvent);


//     document.getElementById('eventForm').reset();
// }




// // function addEvent() {
// //     var eventName = document.getElementById('eventName').value;
// //     var eventStart = document.getElementById('eventStart').value;
// //     var eventEnd = document.getElementById('eventEnd').value;
// //     var eventResource = document.getElementById('eventResource').value;

// //     var newEvent = {
// //         title: eventName,
// //         start: new Date(eventStart),  
// //         end: new Date(eventEnd),      
// //         resourceId: eventResource
// //     };
// //     console.log(newEvent);


// //     calendar.addEvent(newEvent);
// //     calendar.renderEvent(newEvent);
// //     document.getElementById('eventForm').reset();
// // }

// function toggleEventForm() {
//     var eventForm = document.getElementById('eventForm');
//     eventForm.style.display = eventForm.style.display === 'none' ? 'block' : 'none';
// }

// calendar.setOption('eventClick', function (info) {
//     alert('Event: ' + info.event.title);
//     alert('Resource ID: ' + info.event.extendedProps.resourceId);
//     // Add more functionality as needed
// });

// // calendar.setOption('resourceClick', function (info) {
// //     alert('Resource ID: ' + info.resource.id);
// //     alert('Resource Title: ' + info.resource.title);
// //     // Add more functionality as needed
// // });