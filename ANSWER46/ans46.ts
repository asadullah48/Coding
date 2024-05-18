let laptop = {
  brand: "HP",
  model: "AMD PRO A6-8500B",
  processor: "Cores 2C,",
  description: function () {
    console.log(`My laptop is a ${this.brand} ${this.model} ${this.processor}`);
  },
};
laptop.description();
