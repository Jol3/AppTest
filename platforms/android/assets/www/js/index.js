/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var contador = 0;

function validar(x) {
    var radio = document.getElementsByName(x);
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked) {
            return contador++;
        }

}

function resultado() {
    var capa = document.getElementById("resultadoValor");

    if (contador < 2) {
        capa.innerHTML = "Tu resultado es: Eres una persona solitaria y distante de todo el mundo.";
    }
    if (contador > 2) {
        capa.innerHTML = "Tu resultado es: Eres una persona divertida.";
    }
    if (contador > 4) {
        capa.innerHTML = "Tu resultado es: Compañerismo absoluto eso habla bien de ti.";
    }
    if (contador > 8) {
        capa.innerHTML = "Tu resultado es: Eres una persona feliz que le gusta dibujar y disfrutar de tu familia.";
    }
    if (contador > 12) {
        capa.innerHTML = "Tu resultado es: Apasionada y feliz hacia la vida el compañerismo y la empatia es algo que deslumbra de ti.";
    }
    if (contador > 14) {
        capa.innerHTML = "Tu resultado es: Todo en tu vida es felicidad, la escuela es tu pilar y la salud tu bienestar, así como relajarte no es uno de tus hobbies.";
    }

}









app.initialize();
