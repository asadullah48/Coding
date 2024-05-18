var laptop = {
    brand: "HP",
    model: "AMD PRO A6-8500B",
    processor: "Cores 2C,",
    description: function () {
        console.log("My laptop is a ".concat(this.brand, " ").concat(this.model, " ").concat(this.processor));
    },
};
laptop.description();
