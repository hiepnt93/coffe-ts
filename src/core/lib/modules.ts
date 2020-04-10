export type appModule = (
    options: {
        redux:any,
        key:any,
        screens:any,
        sagas:any,
        moduleConfig: any,
        appConfig: any
    }
) => void


const refs: any = {}
const registeredModules: appModule[] = []

function injectReferences(redux:any,key:any,screens:any,sagas:any,config: any): void {
    refs.config = config
    refs.redux = redux
    refs.key = key
    refs.screens = screens
    refs.sagas =  sagas
}

function registerModule(module: appModule, config?: any) {
    if (!registeredModules.includes(module)) {
        module({
            redux:refs.redux,
            key:refs.key,
            screens:refs.screens,
            sagas:refs.sagas,
            appConfig: refs.config,
            moduleConfig: config
        })
        registeredModules.push(module)
    }
}


function isModuleRegistered(name: string): boolean {
    return registeredModules.some(m => m.name === name)
}

export { refs, injectReferences, registerModule, isModuleRegistered }
