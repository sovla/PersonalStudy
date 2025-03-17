/**
 * @description 모든 메서드의 실행 시간을 로그로 남기는 데코레이터
 */
export function LogAllMethods() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return (constructor: Function) => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    // 클래스의 프로토타입에 있는 모든 속성을 순회

    for (const propertyName of Object.getOwnPropertyNames(
      constructor.prototype,
    )) {
      const className = constructor.name;
      const descriptor = Object.getOwnPropertyDescriptor(
        constructor.prototype,
        propertyName,
      );
      // 생성자 또는 함수가 아닌 경우 무시
      if (
        !descriptor ||
        propertyName === 'constructor' ||
        typeof descriptor.value !== 'function'
      ) {
        continue;
      }

      const originalMethod = descriptor.value;

      // 각 메서드를 감싸는 새로운 함수로 재정의
      descriptor.value = function (...args: any[]) {
        const start = process.hrtime();
        const result = originalMethod.apply(this, args);
        if (result && typeof result.then === 'function') {
          return result.then((res: any) => {
            const diff = process.hrtime(start);
            const timeInMs = diff[0] * 1000 + diff[1] / 1e6;
            console.log(
              `${className} : ${propertyName} executed in ${timeInMs.toFixed(3)} ms`,
            );
            return res;
          });
        } else {
          const diff = process.hrtime(start);
          const timeInMs = diff[0] * 1000 + diff[1] / 1e6;
          console.log(
            `${className} : ${propertyName} executed in ${timeInMs.toFixed(3)} ms`,
          );
          return result;
        }
      };

      Object.defineProperty(constructor.prototype, propertyName, descriptor);
    }
  };
}
