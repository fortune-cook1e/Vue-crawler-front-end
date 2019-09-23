<template>
  <div class="daily">
    <el-alert
      title='请选择2个星期，然后获取daily trends'
      type='warning'
    />
    <el-form :model='form' ref='form' label-width='100px'>

      <el-form-item label='范围日期'>
        <el-date-picker
          v-model='form.date'
          type='daterange'
          range-separator="至"
          start-placeholder='开始日期'
          end-placeholder='结束日期'
          unlink-panels
          :picker-options='pickerOptions'
          :default-time="['08:00:00', '08:00:00']"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label='输出文件类型'>
        <el-select v-model='form.fileType' placeholder='选择文件类型'>
          <el-option label='js' value='js'></el-option>
           <el-option label='csv' value='csv'></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type='primary' @click.prevent="submit('form')">
          提交数据
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { daily } from '@/apis/daily'
export default {
  name: 'Daily',
  data () {
    return {
      form: {
        date: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  methods: {
    submit (formName) {
      console.log(new Date('2019-09-10'))
      console.log(this.form.date)
      daily(this.form)
        .then(res => {
          if (res.data === 'ok') {
            this.$message({
              message: '数据获取成功',
              type: 'success'
            })
          }
        }).catch(e => {
          this.$message({
            message: e.message,
            type: 'error'
          })
        })
    }
  }
}
</script>
