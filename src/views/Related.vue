<template>
  <div class="related">
    <el-alert
      type='warning'
      title='上传csv或者js文件，获取对应的relatedQueries(可多选)'
    ></el-alert>

    <el-form ref='form' label-width='100px' :model='form'>
      <el-form-item label='上传文件'>
        <el-upload
          ref='upload'
          :action='url'
          :auto-upload='false'
          :file-list='fileList'
          multiple
        >
          <el-button slot='trigger' type='primary'>
            选择文件
          </el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label='选择输出文件类型'>
        <el-select v-model='form.fileType' placeholder='类型'>
          <el-option label='js' value='js'></el-option>
          <el-option label='csv' value='csv'></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type='primary' @click="submit('form')">
          开始获取
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { related } from '@/apis/related'
export default {
  name: 'Related',
  data () {
    return {
      form: {
        fileType: ''
      },
      fileList: [],
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
    }
  }
}
</script>
