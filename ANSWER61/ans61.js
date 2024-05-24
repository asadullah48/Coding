// Q 61
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
    VehicleType[VehicleType["bicycle"] = 3] = "bicycle";
    VehicleType[VehicleType["Plane"] = 4] = "Plane";
    VehicleType[VehicleType["Rocket"] = 5] = "Rocket";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
console.log(VehicleType.Truck);
console.log(VehicleType.Motorcycle);
console.log(VehicleType.bicycle);
console.log(VehicleType.Plane);
console.log(VehicleType.Rocket);
// Showing one type of vehicle from the list
// It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
// Here, we're just checking what number the Truck category got in our list.
// Here, we're just checking what number the Motorcycle category got in our list.
