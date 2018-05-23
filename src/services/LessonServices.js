let _singleton = Symbol();

const COURSE_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';



class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    createLesson(moduleId, lesson) {
        return fetch(MODULE_API_URL.replace('MID', moduleId),
            {   body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessonsForModule(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteModule(moduleId) {
        return fetch(MODULE_API_URL.replace
        ('MID', moduleId), {
            method: 'delete'
        })
    }


}
export default CourseService;
