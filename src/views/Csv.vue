<template>
  <div class="csv">
    <el-alert
      title='上传js文件 转换为 csv格式（单选）'
      type='warning'
    ></el-alert>

    <el-form ref='form' label-width='100px'>
      <el-form-item>
        <el-upload
          ref='upload'
          :action='url'
          :auto-upload="false"
          :file-list="fileList"
          :http-request='upload'
          required
          multiple
        >
         <el-button slot='trigger' type='primary'>
           选取文件
          </el-button>
          <el-button type='primary' @click='upload'>上传文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { csv } from '@/apis/csv'
export default {
  name: 'Csv',
  data () {
    return {
      fileList: [],
      url: 'http://localhost:3000/csv'
    }
  },
  methods: {
    upload () {
      const formData = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        formData.append('file', file.raw)
      })
      csv(formData)
        .then(res => {
          if (res.data === 'ok') {
            this.$message({
              type: 'success',
              message: '文件转换成功'
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
