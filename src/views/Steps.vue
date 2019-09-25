<template>
  <div class="steps">
    <el-steps :active='active' finish-success align-center>
        <el-step v-for='step in dailySteps'
        :key='step.title'
        :title='step.title'
        :description='step.description'
         />
    </el-steps>

    <el-divider></el-divider>

    <el-steps :active='active' align-center>
      <el-step
        v-for="step in convertSteps"
        :key='step.title'
        :title='step.title'
        :description='step.description'
      ></el-step>
    </el-steps>

    <el-divider></el-divider>

    <el-steps :active='active' align-center>
      <el-step
        v-for="step in formatSteps"
        :key='step.title'
        :title='step.title'
        :description='step.description'
      ></el-step>
    </el-steps>

    <el-button @click='next' type='primary'>
      Next
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  data () {
    return {
      active: 0,
      dailySteps: [
        {
          title: 'Daily页',
          description: '获取一段日期内的daily trends',
          status: 'process'
        },
        {
          title: 'Related页',
          description: '获取对应的relatedQueries',
          status: 'process'
        },
        {
          title: 'Combine页',
          description: '合并js文件',
          status: 'process'
        }
      ],
      convertSteps: [
        {
          title: 'Convert页',
          description: '将js/csv格式转换为js/csv格式文件'
        },
        {
          title: 'Relate页',
          description: '获取relatedQueries'
        },
        {
          title: 'Combine页面',
          description: '合并js/csv格式文件'
        }
      ],
      formatSteps: [
        {
          title: 'format页',
          description: '格式化搜狗词库的txt格式文件，输出为csv格式'
        },
        {
          title: 'Related页',
          description: '获取relatedQueries'
        },
        {
          title: 'Combine页',
          description: '合并文件'
        }
      ]
    }
  },
  methods: {
    next () {
      if (this.active++ > this.dailySteps.length) {
        this.active = 0
      }
    }
  }
}
</script>
