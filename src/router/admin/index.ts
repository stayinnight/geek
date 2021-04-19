import Admin from '../../views/admin/Admin.vue'
import SuperAdmin from '../../views/super-admin/SuperAdmin.vue'
import CheckHomework from '../../views/check-homework/CheckHomework.vue'
import HomeworkDetail  from '../../views/homework-detail/HomeworkDetail.vue'
import HowmworkStatus from '../../views/homework-status/HomeworkStatus.vue'
import StudentDetail from '../../views/student-detail/StudentDetail.vue'
import CourseIntroduce from '../../views/course-introduce/CourseIntorduce.vue'
import ArticleManage from '../../views/article-manage/ArticleMange.vue'
export default [{
  path: '/admin',
  component: Admin,
},
{
  path: '/checkTask',
  component: CheckHomework
}, {
  path: '/superadmin',
  component: SuperAdmin
},{
  path: '/taskDetail/:id',
  component: HomeworkDetail
},{
  path: '/taskStatus',
  component: HowmworkStatus
},{
  path:'/stuDetail',
  component:StudentDetail
},{
  path:'/couInduce',
  component:CourseIntroduce
},{
  path:'/articleManage',
  component:ArticleManage
}]