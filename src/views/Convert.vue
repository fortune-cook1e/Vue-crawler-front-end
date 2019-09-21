<template>
  <div class="convert">
    <el-form ref='form' label-width='100px'>
      <el-form-item>
        <el-upload
          ref='upload'
          :action='url'
          :auto-upload="false"
          :file-list="fileList"
          :http-request='upload'
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
import { convert } from '@/apis/convert'
export default {
  name: 'Convert',
  data () {
    return {
      url: 'http://localhost:3000/convert',
      fileList: []
    }
  },
  methods: {
    upload () {
      const formData = new FormData()
      this.$refs.upload.uploadFiles.forEach(file => {
        formData.append('uploadFile', file.raw)
      })
      convert(formData)
        .then(res => {
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
