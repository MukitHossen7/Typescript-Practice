{
  // type isString<T> = T extends string ? "Yes" : "No";
  // type A = isString<string>;
  // type B = isString<number>;
  // type C = isString<boolean>;
  // type IsObject<T> = T extends object ? "Object" : "Not Object";
  // type A = IsObject<{}>;
  // type B = IsObject<number>;

  //ইউনিয়ন টাইপের সাথে ব্যবহার
  // type ToString<T> = T extends number | boolean ? string : T
  // type A = ToString<string>
  // type B = ToString<number>

  //এরেওর বা never টাইপ শনাক্ত করা
  // type IsNever<T> = [T] extends [never] ? true : false;
  // type A = IsNever<never>

  //অ্যারে কিনা চেক করা
  type IsArray<T> = T extends any[] ? true : false;
  type A = IsArray<string[]>;
}
