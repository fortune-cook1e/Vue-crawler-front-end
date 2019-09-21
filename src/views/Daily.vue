<template>
  <div class="daily">
    <el-form :model='form' ref='form' label-width='100px'>

      <!-- 选择日期 -->
      <el-form-item label='日期'>
        <el-date-picker
          type='dates'
          v-model='form.date'
          placeholder='选择多个日期'
        />
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
      }
    }
  },
  methods: {
    submit (formName) {
      daily(this.form)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
