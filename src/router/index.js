import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import administor from '@/views/administor/administor'
import shebei from '@/views/administor/vue/shebei'
import user from '@/views/administor/vue/user'
import teacherinfoL from '@/views/administor/vue/teacherinfoL'
import studentinfoL from '@/views/administor/vue/studentinfoL'
import kecheng from '@/views/administor/vue/kecheng'
import qiandao from '@/views/administor/vue/qiandao'
import keqiandaoinfo from '@/views/administor/vue/keqiandaoinfo'
import stqiandaoinfo from '@/views/administor/vue/stqiandaoinfo'
import apersion from '@/views/administor/vue/apersion'

import teacher from '@/views/teacher/teacher'
import kechengt from '@/views/teacher/vue/kechengt'
import qiandaot from '@/views/teacher/vue/qiandaot'
import keqiandaoinfot from '@/views/teacher/vue/keqiandaoinfot'
import stqiandaoinfot from '@/views/teacher/vue/stqiandaoinfot'
import tperson from '@/views/teacher/vue/tperson'

import students from '@/views/students/students'
import sperson from '@/views/students/vue/spersion'
import kechengs from '@/views/students/vue/kechengs'
import kaoqing from '@/views/students/vue/kaoqing'


Vue.use(Router)

export default new Router({
  routes: [
  //登录路由
    {
      path: '/index',
      name: 'index',
      component: index,
    },
  //管理员路由
    {
      path:'/administor',
      name:'管理员',
      component:administor,
      children:[
        {
          path:'/shebei',
          name:'设备管理',
          component:shebei,
        },
        {
          path:'/user',
          name:'用户管理',
          component:user,
          children:[
            {
              path:'/teacherinfoL',
              name:'教师信息管理',
              component:teacherinfoL,
            },
            {
              path:'/studentinfoL',
              name:'学生信息管理',
              component:studentinfoL,
            },
          ]
        },
        {
          path:'/kecheng',
          name:'课程管理',
          component:kecheng,
        },
        {
          path:'/qiandao',
          name:'课程签到详情',
          component:qiandao,
          children:[
            {
              path:'/keqiandaoinfo',
              name:'课程签到记录',
              component:keqiandaoinfo,
            },
            {
              path:'/stqiandaoinfo',
              name:'学生签到记录',
              component:stqiandaoinfo,
            },
            //  {
            //    path:'',
            //    redirect:'/keqiandaoinfo',
            //  }
          ]
        },
        {
          path:'/apersion',
          name:'管理员个人中心',
          component:apersion,
        },
        {
          path: '',
          redirect: '/shebei',
        }
      ]
    },
    //教师路由
    {
      path:'/teacher',
      name:'教师',
      component:teacher,
      children:[
        {
          path:'/kechengt',
          name:'教师课程管理',
          component:kechengt,
        },
        {
          path:'/qiandaot',
          name:'课程签到详情',
          component:qiandaot,
          children:[
            {
              path:'/keqiandaoinfot',
              name:'课程签到记录表',
              component:keqiandaoinfot,
            },
            {
              path:'/stqiandaoinfot',
              name:'学生签到记录表',
              component:stqiandaoinfot,
            },
            // {
            //   path:'',
            //   redirect:'/keqiandaoinfot',
            // }
          ]
        },
        {
          path:'/tpersion',
          name:'教师个人中心',
          component:tperson,
        },
        {
          path: '',
          redirect: '/kechengt',
        }
      ]
    },
    //学生路由
    {
      path:'/students',
      name:'学生',
      component:students,
      children:[
        {
          path:'/kechengs',
          name:'学生课程考勤记录',
          component:kechengs,
        },
        {
          path:'/kaoqing',
          name:'学生考勤',
          component:kaoqing,
        },
        {
          path:'/spersion',
          name:'学生个人中心',
          component:sperson,
        },
        {
          path: '',
          redirect: '/kechengs',
        }
      ]
    },
    {
     path: '*',
     redirect: '/index',// /index
   }
  ]
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
