let _singleton = Symbol();

const MODULE_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_DELETE_API_URL=
    'http://localhost:8080/api/lesson/LID';


const LESSON_DELETE_API_URL_HEROKU =
    'https://webdev-attinder-summer1-2018.herokuapp.com/api/lesson/LID';

const MODULE_API_URL_HEROKU =
    'https://webdev-attinder-summer1-2018.herokuapp.com/api/course/CID/module/MID/lesson';




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
        return fetch(MODULE_API_URL_HEROKU.replace('MID', moduleId),
            {   body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessonsForModule(moduleId, courseId) {
        return fetch(
            MODULE_API_URL_HEROKU
                .replace('CID', courseId)
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteLesson(lessonId) {
        return fetch(LESSON_DELETE_API_URL_HEROKU.replace
        ('LID', lessonId), {
            method: 'delete'
        })
    }


}
export default CourseService;
