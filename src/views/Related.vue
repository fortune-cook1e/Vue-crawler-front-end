<template>
  <div class="related">
    <SmartForm
      :tip='tip'
      labelWidth='100px'
      :form='form'
      :operation='submit'
      v-on:clear-files='clearFiles'
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

      <template v-slot:fileType>
        <el-form-item label='输出格式类型'>
          <el-select v-model='form.fileType'>
            <el-option label='js' value='js'></el-option>
            <el-option label='csv' value='csv'></el-option>
          </el-select>
        </el-form-item>
      </template>
    </SmartForm>
  </div>
</template>

<script>
import SmartForm from '@/components/SmartForm.vue'
import { related } from '@/apis/related'
export default {
  name: 'Related',
  components: {
    SmartForm
  },
  data () {
    return {
      form: {
        fileType: ''
      },
      fileList: [],
      tip: '上传csv或者js文件，获取对应的relatedQueries(可多选)',
      url: 'http://localhost:3000/related'
    }
  },
  methods: {
    submit (formName) {
      let formData = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        formData.append('uploadFile', file.raw)
      })
      formData.append('fileType', this.form.fileType)
      related(formData)
        .then(res => {
          console.log(res)
          if (res.data === 'ok') {
            this.$message({
              type: 'success',
              message: 'related全部获取成功'
            })
          }
        }).catch(e => {
          this.$message({
            type: 'error',
            message: e.message
          })
        })
    },
    clearFiles () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
