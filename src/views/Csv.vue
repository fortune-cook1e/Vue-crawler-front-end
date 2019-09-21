<template>
  <div class="csv">
    <el-form ref='form' label-width='100px'>
      <el-form-item>
        <el-upload
          ref='upload'
          :action='url'
          :auto-upload="false"
          :file-list="fileList"
          :http-request='upload'
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
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
