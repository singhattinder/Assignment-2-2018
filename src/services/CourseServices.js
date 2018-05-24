let _singleton = Symbol();

const COURSE_API_URL =
    'http://localhost:8080/api/course';

const COURSE_API_URL_HEROKU =
    'https://webdev-attinder-summer1-2018.herokuapp.com/api/course';





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

    findAllCourses() {
        return fetch(COURSE_API_URL_HEROKU)
            .then(function(response){
                return response.json();
            });
    }

    findCoursesById(courseId) {
        return fetch(COURSE_API_URL_HEROKU + '/' + courseId)
            .then(function(response){
                return response.json();
            });
    }

    createCourse(course) {
        return fetch(COURSE_API_URL_HEROKU, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    deleteCourse(courseId) {
        return fetch(COURSE_API_URL_HEROKU + '/' + courseId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }



}
export default CourseService;
