import IProjeto from "@/interfaces/IProjetos";
import {createStore, Store } from "vuex";
import { InjectionKey } from "vue"


interface Estado{
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>>= Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            
        ]
    }
})