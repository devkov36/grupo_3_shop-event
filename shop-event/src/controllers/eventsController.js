const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, '../data/event.json');
const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

const eventController = {
    cart: (req, res) => {
        res.render('productCart');
    },
    detail: (req, res) => {
        const id = +req.params.id;
        
        let event = events.find( (event) => {
            return event.id === id;
        })

        res.render('productDetail', {event : event});
    },
    create: (req, res) => {
		res.render('event-create-form');
	},

    // GET para Actualizar Eventos
    edit: (req, res) => {

        const id = +req.params.id;

        let eventDetail = events.find( (event) => {
            return event.id === id;
        });

        res.render('event-edit-form', {title: eventDetail.title, eventToEdit: eventDetail});
    },

    // UPDATE para actualizar Eventos
    update: (req, res) => {

        const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

        console.log(req.file);

        const id = +req.params.id;
        let main_img = req.file.filename;
        let section_img="banner.jpeg";

        let {title, date, cost, ubication, category, description} = req.body;
        let editEvent = {
            id, title, date, cost, ubication, category, description, main_img, section_img
        }

        for (let i in events){
            if( events[i].id === id ){
                events[i] = editEvent;
                break;
            }
        }

        fs.writeFileSync( eventsFilePath, JSON.stringify(events), { encoding: 'utf-8'} );
        res.redirect('/');
    },

    // SAVE para crear Eventos
    save: (req, res) => {

        const events = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

        let main_img = req.file.filename;
        let section_img = "banner.jpeg";

        let {title, date, cost, ubication, category, description} = req.body;
        let id=0;
        for (let i in events){            
            if( events[i].id >id ){
                id=events[i].id;                
            }
        }
        id=id+1;
        let addEvent = {
            id, title, date, cost, ubication, category, description, main_img, section_img
        }
        events.push(addEvent);
        fs.writeFileSync( eventsFilePath, JSON.stringify(events), { encoding: 'utf-8'} );
        res.redirect('/');
    }
}

module.exports = eventController;
