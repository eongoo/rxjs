import {Observable} from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.create(observer => {
  let index = 0;
  let produceValue = () => {
    observer.next(numbers[index++]);

    if(index < numbers.length) {
      setTimeout(produceValue, 2000);
    } else {
      observer.complete();
    }
  }

  produceValue();

}).map(n => n * 2)
  .filter(n => n > 4);

source.subscribe(
  value => console.log(`value: ${value}`),
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);

//import {Observable, Observer} from "rxjs";
/*
let source = Observable.from(numbers);
*/
//  observer.complete();
/*
class MyObserver implements Observer<number>{
  next(value) {
    console.log(`value: ${value}`);
  }

  error(e) {
    console.log(`error: ${e}`);
  }

  complete() {
    console.log("complete");
  }
}
source.subscribe(new MyObserver());
*/
