"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ListingService = (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getListings = function () {
        return Rx_1.Observable.forkJoin(this.http.get('http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San%20Francisco.json').map(function (res) { return res.json().items; }));
    };
    ListingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListingService);
    return ListingService;
}());
exports.ListingService = ListingService;
//# sourceMappingURL=listing.service.js.map