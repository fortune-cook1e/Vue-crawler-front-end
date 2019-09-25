<template>
  <div class="daily">
    <SmartForm
      :tip='tip'
      labelWidth='100px'
      :form='form'
      :operation='submit'
    >
      <template v-slot:date>
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
            required
          ></el-date-picker>
        </el-form-item>
      </template>

      <template v-slot:country>
        <el-form-item label='选择国家'>
          <el-select v-model='form.country' placeholder='选择国家' required>
          <el-option v-for='country in countries' :label="country.name+country.value" :key='country.value' :value='country.value'></el-option>
        </el-select>
        </el-form-item>
      </template>

      <template v-slot:fileType>
        <el-form-item label='输出文件类型'>
          <el-select v-model='form.fileType' placeholder='选择文件类型' required>
            <el-option label='js' value='js'></el-option>
            <el-option label='csv' value='csv'></el-option>
          </el-select>
        </el-form-item>
      </template>

    </SmartForm>
  </div>
</template>

<script>
import { daily } from '@/apis/daily'
import SmartForm from '@/components/SmartForm'
export default {
  name: 'Daily',
  components: {
    SmartForm
  },
  data () {
    return {
      form: {
        date: '',
        fileType: '',
        country: ''
      },
      countries: [
        { name: '阿根廷', value: 'AR' }, { name: '埃及', value: 'EG' }, { name: '爱尔兰', value: 'IE' }, { name: '奥地利', value: 'AT' },
        { name: '澳大利亚', value: 'AU' }, { name: '巴西', value: 'BR' }, { name: '比利时', value: 'BE' }, { name: '波兰', value: 'PL' },
        { name: '丹麦', value: 'DK' }, { name: '德国', value: 'DE' }, { name: '俄罗斯', value: 'RU' }, { name: '法国', value: 'FR' },
        { name: '菲律宾', value: 'PH' }, { name: '芬兰', value: 'FI' }, { name: '哥伦比亚', value: 'CO' }, { name: '韩国', value: 'KR' },
        { name: '荷兰', value: 'NL' }, { name: '加拿大', value: 'CA' }, { name: '捷克', value: 'CZ' }, { name: '肯尼亚', value: 'KE' },
        { name: '罗马尼亚', value: 'RO' }, { name: '马来西亚', value: 'MY' }, { name: '美国', value: 'US' }, { name: '墨西哥', value: 'MX' },
        { name: '南非', value: 'ZA' }, { name: '尼日利亚', value: 'NG' }, { name: '挪威', value: 'NO' }, { name: '葡萄牙', value: 'PT' },
        { name: '日本', value: 'JP' }, { name: '瑞典', value: 'SE' }, { name: '瑞士', value: 'CH' }, { name: '沙特阿拉伯', value: 'SA' },
        { name: '泰国', value: 'TH' }, { name: '台湾', value: 'TW' }, { name: '土耳其', value: 'TR' }, { name: 'UA', value: '乌克兰' },
        { name: '希腊', value: 'GR' }, { name: '香港', value: 'HK' }, { name: '新加坡', value: 'SG' }, { name: '新西兰', value: 'NZ' },
        { name: '匈牙利', value: 'HU' }, { name: '以色列', value: 'IL' }, { name: '意大利', value: 'IT' }, { name: '印度', value: 'IN' },
        { name: '印度尼西亚', value: 'ID' }, { name: '英国', value: 'GB' }, { name: '越南', value: 'VN' }, { name: '智利', value: 'CL' }
      ],
      tip: '请选择2个日期，然后获取daily trends',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  methods: {
    submit (formName) {
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
