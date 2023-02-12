import { InjectionKey, Ref } from 'vue'

// InjecttionKeyを使って、Ref<string>型の値を注入するキーを定義する
export const userNameInjectionKey: InjectionKey<Ref<string>> = Symbol()

// リアクティブな値を注入するためのキーを定義する
export const userNameReactiveInjectionKey: InjectionKey<() => void> = Symbol()
