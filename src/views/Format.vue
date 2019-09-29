<template>
  <div class="translate">
    <SmartForm
      :tip='tip'
      labelWidth='100px'
      :form='form'
      :operation='submit'
    >
      <template v-slot:file>
        <el-form-item label='上传文件'>
          <el-upload
            ref='upload'
            :action='url'
            :auto-upload='false'
            :file-list='fileList'
            multiple
            required
          >
            <el-button slot='trigger' type='primary'>
              选取文件
            </el-button>
          </el-upload>
        </el-form-item>
      </template>

      <template>
        <el-form-item label='格式化类型'>
          <el-select v-model='form.formatType'>
            <el-option value='sougou' label='搜狗词库'></el-option>
            <el-option value='amazon' label='amazon'></el-option>
            <el-option value='scientific' label='scientific'></el-option>
          </el-select>
        </el-form-item>
      </template>

    </SmartForm>
  </div>
</template>

<script>
import { format as _format } from '@/apis/format'
import SmartForm from '@/components/SmartForm'
export default {
  name: 'format',
  components: {
    SmartForm
  },
  data () {
    return {
      tip: '翻译搜狗词库的txt或者csv格式文件，输出为csv格式',
      form: {
        formatType: ''
      },
      url: 'http://localhost:3000/format',
      fileList: []
    }
  },
  methods: {
    submit (formName) {
      let form = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        form.append('uploadFiles', file.raw)
      })
      form.append('formatType', this.form.formatType)
      _format(form)
        .then(res => {
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
