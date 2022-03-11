class Tab1Page {
  counter = 0;
  static otherCounter = 5;

  // constructor(counter) {
  //   this.counter = counter;
  // }

  buttonClicked(counter) {
    this.counter = counter + 1;
    Tab1Page.otherCounter = Tab1Page.otherCounter + 1;
    console.log('clicked', this.counter);
  }

  static otherButtonClicked() {
    console.log('in otherButtonClicked');
  }
}

const myFoo = new Tab1Page();
myFoo.buttonClicked(5);

const myFoo2 = new Tab1Page();
myFoo2.buttonClicked(15);
myFoo2.buttonClicked(15);

console.log(Tab1Page.otherCounter);
Tab1Page.otherButtonClicked();
