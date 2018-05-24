let _singleton = Symbol();

const MODULE_API_URL =
    'http://localhost:8080/api/course/CID/module';

const MODULE_DELETE_URL =
    'http://localhost:8080/api/module/MID';

const MODULE_API_URL_HEROKU =
    'https://webdev-attinder-summer1-2018.herokuapp.com/api/course/CID/module';

const MODULE_DELETE_URL_HEROKU =
    'https://webdev-attinder-summer1-2018.herokuapp.com/api/module/MID';



export default  class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL_HEROKU.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL_HEROKU
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteModule(moduleId) {
        return fetch(MODULE_DELETE_URL_HEROKU.replace
        ('MID', moduleId), {
            method: 'delete'
        })
    }



}

