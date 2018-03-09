angular.module('notesApp', [])
    .controller('MainCtrl', [function() {
        var self = this;
        self.users = [
            { name: 'Jan', surname: 'Filipiak', mail: 'jan@domena.pl', mac: '00:0A:E6:3E:FD:E1', signal: 50 },
            { name: 'Tomasz', surname: 'Fraczek', mail: 'tom.frontz@gmail.com', mac: '01:0A:F6:3E:FD:F1', signal: -30 },
            { name: 'Joanna', surname: 'Nowakowska', mail: 'joanowak@domena2.pl', mac: '04:0A:B6:3E:CD:E1', signal: 10 },
            { name: 'Anna', surname: 'Starak', mail: 'annas@domena3.pl', mac: '05:0E:B6:3E:CD:B1', signal: -70 }
        ];
        
        self.remove = function (user) {
            //uaktualnienie tablicy użytkowników z wylaczeniem bieżącego
            self.users = self.users.filter(e => e != user);

        };
        self.add = function () {              
            self.users.push({
                name: self.name,
                surname: self.surname,
                mail: self.mail,
                mac: self.mac,
                signal: self.signal
            });
            console.log('Zatwierdzono użytkownika ' + self.name + ' ' + self.surname);  
        }; 
    
    }
])