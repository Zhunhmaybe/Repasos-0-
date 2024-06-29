// ejemplo
const monstro = {
    secreto: 'Fácilmente asustada',
    recuentoOjos: 4
    };
const manejador = {
    get: function(objetivo, atributo) {
        if (atributo === 'secreto') {
            return `${objetivo.secreto.substr(11, 8)} ... shhhh!`;
            }
        return Reflect.get(...arguments);
        }
    };
const proxy2 = new Proxy(monstro, manejador);
console.log(proxy2.recuentoOjos);           //  4
console.log(proxy2.secreto);                //  "asustada ... shhhh!"

// ejemplo set
const monster1 = { ojosCont: 4 };
const handler1 = {  
    set(obj, prop, value) {
        if ((prop === 'ojosCont') && ((value % 2) !== 0)) {
            console.log('Los monstruos deben tener un número par de ojos');
            } else {
                return Reflect.set(...arguments);
            }
        }
    };
const proxy3 = new Proxy(monster1, handler1);
proxy3.ojosCont = 1; //  "Los monstruos deben tener un número par de ojos."
console.log(proxy3.ojosCont); //  4
proxy3.ojosCont = 2;          
console.log(proxy3.ojosCont); // 2

// 3 ejemplo
var revocable = Proxy.revocable({}, {
    get: function(target, name) {
      return "[[" + name + "]]";
    }
  });
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"
proxy.foo = 1           // TypeError again
console.log(proxy.foo); // TypeError is thrown
revocable.revoke();
console.log(proxy.foo); // TypeError is thrown
delete proxy.foo;       // still TypeError
typeof proxy;           // "object", typeof doesn't trigger any trap

