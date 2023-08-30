import { ConcreteStateA } from "./testClass";
import { Context } from "./context";

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
