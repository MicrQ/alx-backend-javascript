import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const mapRoutes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
