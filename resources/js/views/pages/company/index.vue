<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import ErrorMessage from "../../../components/widgets/errorMessage";
import adminApi from "../../../api/adminAxios";
import { required, minLength, maxLength ,integer,email, sameAs ,url} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import loader from "../../../components/loader";


/**
 * Advanced Table component
 */

// start validation image/png
const imgValid = (value) => ['image/png','image/jpg','image/jpeg','image/gif'].includes(value);

export default {
    page: {
        title: "Companies",
        meta: [{ name: "description", content: 'Companies' }],
    },
    components: {
        Layout,
        PageHeader,
        loader,
        ErrorMessage
    },
    data() {
        return {
            title: `company.company`,
            items: [
                {
                    text: "alshamel",
                    to: {name: "home"},
                },
                {
                    text: `company.company`,
                    active: true,
                },
            ],
            per_page: 10,
            search: '',
            debounce: {},
            companiesPagination: {},
            companies: [],
            enabled3: false,
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                email: '',
                partner_id: null,
                url:'',
                phone:'',
                search: "",
                tax_id: null,
                vat_no: null,
                cr:'',
                logo:{},
                address:'',
                website: '',
                is_active: null,
                type: ''
            },
            edit: {
                name: '',
                name_e: '',
                email: '',
                partner_id: null,
                url:'',
                phone:'',
                tax_id: null,
                vat_no: null,
                cr:'',
                logo:{},
                address:'',
                website: '',
                is_active: null,
                type: '',
                search: "",
                file: '',
                isImage: true
            },
            errors: {},
            isDrop: false,
            isButton: true,
            image: '',
            counter: 0,
            dropDownSenders: []
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            email: {required,email,minLength: minLength(3),maxLength: maxLength(100)},
            phone: {required,minLength: minLength(8),maxLength: maxLength(16),integer},
            tax_id: {required,minLength: minLength(1),maxLength: maxLength(10),integer},
            vat_no: {required,minLength: minLength(1),maxLength: maxLength(10),integer},
            url: {required,url,minLength: minLength(10),maxLength: maxLength(200)},
            website: {required,url,minLength: minLength(10),maxLength: maxLength(200)},
            cr: {required,minLength: minLength(3),maxLength: maxLength(100)},
            address: {required,minLength: minLength(10),maxLength: maxLength(200)},
            logo: {required},
            partner_id: {required,integer},
            is_active: {required},
            type: {imgValid}
        },
        edit: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            email: {required,email,minLength: minLength(3),maxLength: maxLength(100)},
            phone: {required,minLength: minLength(8),maxLength: maxLength(16),integer},
            tax_id: {required,minLength: minLength(1),maxLength: maxLength(10),integer},
            vat_no: {required,minLength: minLength(1),maxLength: maxLength(10),integer},
            url: {required,url,minLength: minLength(10),maxLength: maxLength(200)},
            website: {required,url,minLength: minLength(10),maxLength: maxLength(200)},
            cr: {required,minLength: minLength(3),maxLength: maxLength(100)},
            address: {required,minLength: minLength(10),maxLength: maxLength(200)},
            logo: {},
            partner_id: {required,integer},
            is_active: {required}
        },
    },
    watch: {
        /**
         * watch per_page
         */
        per_page(after,befour){
            this.getData();
        },
        /**
         * watch search
         */
        search(after,befour){
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.getData();
            }, 400);
        },
    },
    mounted() {
        this.getData();
        this.keyDropdown();
    },
    methods: {
        /**
         *  get Data company
         */
        getData(page = 1){

            this.isLoader = true;

            adminApi.get(`/companies?page=${page}&per_page=${this.per_page}&search=${this.search}`)
                .then((res) => {
                    let l = res.data;
                    this.companies = l.data;
                    this.companiesPagination = l.pagination;
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${this.$t('general.Error')}`,
                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                    });
                })
                .finally(() => {
                    this.isLoader = false;
                });
        },
        /**
         *  delete company
         */
        deletecompany(id,index) {
            Swal.fire({
                title: `${this.$t('general.Areyousure')}`,
                text: `${this.$t('general.Youwontbeabletoreverthis')}`,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: `${this.$t('general.Yesdeleteit')}`,
                cancelButtonText: `${this.$t('general.Nocancel')}`,
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
                buttonsStyling: false,
            }).then((result) => {
                if (result.value) {

                    this.isLoader = true;

                    adminApi.delete(`/companies/${id}`)
                        .then((res) => {
                            this.companies.splice(index,1);
                            Swal.fire({
                                icon: 'success',
                                title: `${this.$t('general.Deleted')}`,
                                text: `${this.$t('general.Yourrowhasbeendeleted')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        })
                        .finally(() => {
                            this.isLoader = false;
                        });
                }
            });
        },
        /**
         *  reset Modal (create)
         */
        resetModalHidden(){
            this.create =  {
                name: '',
                name_e: '',
                email: '',
                partner_id: null,
                url:'',
                phone:'',
                search: "",
                tax_id: null,
                vat_no: null,
                cr:'',
                logo:{},
                address:'',
                website: '',
                is_active: null,
                type: ''
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.isDrop = false;
            this.isButton = true;
            this.image = '';
            this.dropDownSenders = [];
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {
                name: '',
                name_e: '',
                email: '',
                partner_id: null,
                url:'',
                phone:'',
                search: "",
                tax_id: null,
                vat_no: null,
                cr:'',
                logo:{},
                address:'',
                website: '',
                is_active: null,
                type: '',
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.dropDownSenders = [];
            this.isButton = true;
            this.errors = {};
        },
        /**
         *  create company
         */
        AddSubmit(){
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                let formDate = new FormData();
                formDate.append('name',this.create.name);
                formDate.append('name_e',this.create.name_e);
                formDate.append('email',this.create.email);
                formDate.append('phone',this.create.phone);
                formDate.append('tax_id',this.create.tax_id);
                formDate.append('partner_id',this.create.partner_id);
                formDate.append('logo',this.create.logo);
                formDate.append('website',this.create.website);
                formDate.append('cr',this.create.cr);
                formDate.append('url',this.create.url);
                formDate.append('address',this.create.address);
                formDate.append('is_active',this.create.is_active);
                formDate.append('vat_no',this.create.vat_no);

                adminApi.post(`/companies`,formDate)
                    .then((res) => {
                        this.$bvModal.hide(`create`);
                        this.companies.unshift(res.data.data);
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Addedsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
                    })
                    .catch((err) => {
                        this.errors = err.response.data.errors;
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }

        },
        /**
         *  edit company
         */
        editSubmit(id,index){
            this.$v.edit.$touch();
            console.log(id);
            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                let formDate = new FormData();
                formDate.append('name',this.edit.name);
                formDate.append('name_e',this.edit.name_e);
                formDate.append('email',this.edit.email);
                formDate.append('phone',this.edit.phone);
                formDate.append('tax_id',this.edit.tax_id);
                formDate.append('partner_id',this.edit.partner_id);
                formDate.append('logo',this.edit.logo);
                formDate.append('website',this.edit.website);
                formDate.append('cr',this.edit.cr);
                formDate.append('url',this.edit.url);
                formDate.append('address',this.edit.address);
                formDate.append('is_active',this.edit.is_active);
                formDate.append('vat_no',this.edit.vat_no);
                formDate.append('_method','PUT');

                adminApi.post(`/companies/${id}`,formDate)
                    .then((res) => {
                        console.log(res);
                        this.companies[index] = res.data.data;
                        this.$bvModal.hide(`modal-edit-${id}`);
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Editsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
                    })
                    .catch((err) => {
                        console.log(err.response);
                        this.errors = err.response.data.errors;
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }
        },
        /**
         *  get parent
         */
        getPartner(){
            adminApi.get(`/partners?per_page=${this.per_page}&search=${this.search}&is_active=active`)
                .then((res) => {
                    let l = res.data;
                    this.dropDownSenders = l.data;
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${this.$t('general.Error')}`,
                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                    });
                });
        },
        /**
         *   show Modal (edit)
         */
        resetModalEdit(id){
            let company = this.companies.find(e => id == e.id );
            this.edit.name = company.name;
            this.edit.name_e = company.name_e;
            this.edit.is_active = company.is_active;
            this.edit.email = company.email;
            this.edit.address = company.address;
            this.edit.cr = company.cr;
            this.edit.partner_id = company.partner.id;
            this.edit.search = this.$i18n.locale == 'ar'? company.partner.name : company.partner.name_e;
            this.edit.tax_id = company.tax_id;
            this.edit.url = company.url;
            this.edit.website = company.website;
            this.edit.vat_no = company.vat_no;
            this.edit.phone = company.phone;
            this.dropDownSenders = [];
            this.errors = {};
            this.edit.file = company.logo;
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            this.edit = {
                name: '',
                name_e: '',
                email: '',
                partner_id: null,
                url:'',
                phone:'',
                tax_id: null,
                vat_no: null,
                cr:'',
                logo:{},
                address:'',
                website: '',
                is_active: null,
                type: '',
                search: "",
                file: '',
                isImage: true
            };
            this.errors = {};
            this.dropDownSenders = [];
        },

        /**
         *  start Image ceate
         */
        onDragEnter(){
            this.isDrop = true;
            this.counter++;
        },
        onDragLeave(){
            this.counter--;
            this.isDrop = false;
        },
        onDrop(e){
            this.create.logo = {};
            this.image = '';
            this.isDrop = false;
            const file = e.dataTransfer.files;
            this.addImage(file[0]);
        },
        onImageChanged(e){
            this.create.logo = {};
            this.edit.isImage = false;
            this.image = '';
            const file = e.target.files[0];
            this.addImage(file);
        },
        addImage(file){
            this.isDrop = true;
            this.create.type = file.type;
            this.create.logo = file; //upload
            //preview of image
            const reader = new FileReader();
            reader.onload = (e)=> this.image = e.target.result;
            reader.readAsDataURL(this.create.logo);
        },
        deleteImageCreate(){
            this.isDrop = false;
            this.create.type = '';
            this.image = '';
            this.create.logo = {};
        },
        /**
         *  end Image ceate
         */

        /**
         *  start Image ceate
         */
        onDragEnterEdit(){
            this.isDrop = true;
            this.counter++;
        },
        onDragLeaveEdit(){
            this.counter--;
            this.isDrop = false;
        },
        onDropEdit(e){
            this.edit.logo = {};
            this.image = '';
            this.edit.isImage = false;
            this.isDrop = false;
            const file = e.dataTransfer.files;
            this.addImageEdit(file[0]);
        },
        onImageChangedEdit(e){
            this.edit.logo = {};
            this.edit.isImage = false;
            this.image = '';
            const file = e.target.files[0];
            this.addImageEdit(file);
        },
        addImageEdit(file){
            if(file){
                this.isDrop = true;
                this.edit.type = file.type;
                this.edit.logo = file; //upload
                //preview of image
                const reader = new FileReader();
                reader.onload = (e)=> this.image = e.target.result;
                reader.readAsDataURL(this.edit.logo);
            }else{
                this.edit.isImage = true;
            }
        },
        deleteImageEdit(){
            this.isDrop = false;
            this.edit.isImage = true;
            this.edit.type = '';
            this.image = '';
            this.edit.logo = {};
        },
        /**
         *  end Image ceate
         */

        /**
         *  start  dropdown Google
         */
        searchSender(){
            this.dropDownSenders = [];
            this.create.partner_id = null;
            this.edit.partner_id = null;
            if(this.create.search || this.edit.search){
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {
                    this.getPartner();
                }, 400);
            }else{
                this.dropDownSenders = [];
            }
            this.isButton = false;
        },

        showSenderName(index){
            let item = this.dropDownSenders[index];
            this.create.partner_id = item.id;
            this.create.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.edit.partner_id = item.id;
            this.edit.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.isButton = true;
            this.dropDownSenders = [];
        },

        senderHover(e){
            let items = document.querySelectorAll('.sender-search .Sender');
            items.forEach(e => e.classList.remove('active'));
            e.target.classList.add('active');
        },

        keyDropdown(){
            document.addEventListener('keyup',(e) => {
                if(e.keyCode == 38){ //top arrow
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        let isTrue = false;
                        let index = null;
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) {
                                isTrue = true;
                                index = i;
                            }
                        });
                        if(isTrue && index != 0){
                            items[index].classList.remove('active');
                            items[index - 1].classList.add('active');
                        }else if(isTrue && index == 0){
                            items[index].classList.remove('active');
                            items[items.length - 1].classList.add('active');
                        }
                        if(!isTrue) items[0].classList.add('active');
                    }else {
                        this.dropDownSenders = [];
                    }
                };

                if(e.keyCode == 40){ //down arrow
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        let isTrue = false;
                        let index = null;
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) {
                                isTrue = true;
                                index = i;
                            }
                        });
                        if(isTrue && index != (items.length - 1)){
                            items[index].classList.remove('active');
                            items[index + 1].classList.add('active');
                        }else if(isTrue && index == (items.length - 1)){
                            items[index].classList.remove('active');
                            items[0].classList.add('active');
                        }
                        if(!isTrue) items[items.length - 1].classList.add('active');
                    }else {
                        this.dropDownSenders = [];
                    }
                };

                if(e.keyCode == 13){ //enter
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) this.showSenderName(i);
                        });
                    }else {
                        this.dropDownSenders = [];
                    }
                    e.target.blur();
                };
            });

            document.addEventListener('click',(e) => {
                if(this.dropDownSenders.length > 0){
                    if(e.target.classList.contains('Sender') || e.target.classList.contains('input-Sender')){
                        this.isButton = false;
                    }else {
                        this.isButton = false;
                        this.dropDownSenders = [];
                    }
                }
            });
        },

        ClickDropdown(e){
            if(this.dropDownSenders.length > 0){
                if(e.target.classList.contains('Sender') || e.target.classList.contains('input-Sender')){
                    this.isButton = false;
                }else {
                    this.isButton = true;
                    this.dropDownSenders = [];
                }
            }
        }
        /**
         *  end  dropdown Google
         */

    }
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <div class="row justify-content-between align-items-center mb-3">
                            <h4 class="header-title"> {{ $t('company.companysTable') }}</h4>
                            <b-button
                                v-b-modal.create
                                variant="success"
                                v-if="isButton"
                            >
                                {{ $t('general.Create') }}
                            </b-button>
                        </div>

                        <div class="row justify-content-between align-items-center mb-3">
                            <div class="col-lg-3 col-6" style="font-weight: 500">
                                {{ $t('general.Show') }}
                                <select
                                    class="custom-select custom-select-sm mr-sm-2"
                                    v-model="per_page"
                                    style="display: inline-block;width:auto"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                                {{ $t('general.entries') }}
                            </div>
                            <div class="col-lg-3 col-6" style="font-weight: 500">
                                {{ $t('general.Search') }}:
                                <input
                                    class="form-control form-control-sm"
                                    style="display: inline-block;width:auto"
                                    type="text"
                                    v-model.trim="search"
                                    :placeholder="`${$t('general.Search')}...`"
                                >
                            </div>
                        </div>

                        <!--  create   -->
                        <b-modal
                            id="create"
                            :title="$t('company.addcompany')"
                            title-class="font-18"
                            size="lg"
                            body-class="p-4"
                            :hide-footer="true"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form  @submit.stop.prevent="AddSubmit">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">{{ $t('general.Name') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model.trim="$v.create.name.$model"
                                                :class="{
                                                'is-invalid':$v.create.name.$error || errors.name,
                                                'is-valid':!$v.create.name.$invalid && !errors.name
                                            }"
                                                :placeholder="$t('general.Name')" id="field-1"
                                            />
                                            <div class="valid-feedback" v-if="!errors.name">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.name.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.name">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model.trim="$v.create.name_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.name_e.$error || errors.name_e,
                                                'is-valid':!$v.create.name_e.$invalid && !errors.name_e
                                            }"
                                                :placeholder="$t('general.Name_en')" id="field-2"
                                            />
                                            <div class="valid-feedback" v-if="!errors.name_e">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.name_e.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.name_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-3" class="control-label">{{ $t('login.Emailaddress') }}</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                v-model.trim="$v.create.email.$model"
                                                :class="{
                                                'is-invalid':$v.create.email.$error || errors.email,
                                                'is-valid':!$v.create.email.$invalid && !errors.email
                                            }"
                                                :placeholder="$t('login.Emailaddress')" id="field-3"
                                            />
                                            <div class="valid-feedback" v-if="!errors.email">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.email.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.email.email" class="invalid-feedback">{{ $t('general.PleaseEnterValidEmail') }}</div>
                                            <div v-if="!$v.create.email.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.email.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.email.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.email.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.email">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="inlineFormCustomSelectPref">{{ $t('general.Status') }}</label>
                                            <select
                                                class="custom-select"
                                                id="inlineFormCustomSelectPref"
                                                v-model="$v.create.is_active.$model"
                                                :class="{
                                                'is-invalid':$v.create.is_active.$error || errors.is_active,
                                                'is-valid':!$v.create.is_active.$invalid && !errors.is_active
                                            }"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option value="active">{{ $t('general.Active') }}</option>
                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                            </select>
                                            <div class="valid-feedback" v-if="!errors.is_active">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.is_active.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <template v-if="errors.is_active">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-7" class="control-label">{{ $t('general.mobile_no') }}</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model.number="$v.create.phone.$model"
                                                :class="{
                                                'is-invalid':$v.create.phone.$error || errors.phone,
                                                'is-valid':!$v.create.phone.$invalid && !errors.phone
                                            }"
                                                :placeholder="$t('general.mobile_no')" id="field-7"
                                            />
                                            <div class="valid-feedback" v-if="!errors.phone">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.phone.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.phone.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.phone.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.phone.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.phone.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.phone.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                            <template v-if="errors.phone">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-5" class="control-label">{{ $t('general.taxnumber') }}</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model.number="$v.create.tax_id.$model"
                                                :class="{
                                                'is-invalid':$v.create.tax_id.$error || errors.tax_id,
                                                'is-valid':!$v.create.tax_id.$invalid && !errors.tax_id
                                            }"
                                                :placeholder="$t('general.taxnumber')" id="field-5"
                                            />
                                            <div class="valid-feedback" v-if="!errors.tax_id">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.tax_id.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.tax_id.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.tax_id.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.tax_id.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.tax_id.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.tax_id.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                            <template v-if="errors.tax_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.tax_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-6" class="control-label">{{ $t('general.Valueaddedregistrationnumber') }}</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model.number="$v.create.vat_no.$model"
                                                :class="{
                                                'is-invalid':$v.create.vat_no.$error || errors.vat_no,
                                                'is-valid':!$v.create.vat_no.$invalid && !errors.vat_no
                                            }"
                                                :placeholder="$t('general.Valueaddedregistrationnumber')" id="field-6"
                                            />
                                            <div class="valid-feedback" v-if="!errors.vat_no">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.vat_no.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.vat_no.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.vat_no.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.vat_no.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.vat_no.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.vat_no.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                            <template v-if="errors.vat_no">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.vat_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-8" class="control-label">{{ $t('general.CommercialRecord') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model.trim="$v.create.cr.$model"
                                                :class="{
                                                'is-invalid':$v.create.cr.$error || errors.cr,
                                                'is-valid':!$v.create.cr.$invalid && !errors.cr
                                            }"
                                                :placeholder="$t('general.CommercialRecord')" id="field-8"
                                            />
                                            <div class="valid-feedback" v-if="!errors.cr">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.cr.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.cr.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.cr.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.cr.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.cr.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.cr">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.cr" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group position-relative">
                                            <label for="field-9" class="control-label">{{ $t('partner.partner') }}</label>
                                            <input
                                                type="text"
                                                class="form-control input-Sender"
                                                v-model.trim="create.search"
                                                @input="searchSender"
                                                @blur.prevent="ClickDropdown"
                                                @focus="isButton = false"
                                                :class="{
                                                'is-invalid':$v.create.partner_id.$error || errors.partner_id,
                                                'is-valid':!$v.create.partner_id.$invalid && !errors.partner_id
                                            }"
                                                :placeholder="$t('partner.partner')" id="field-9"
                                            />

                                            <ul class="dropdown-search list-unstyled sender-search"
                                                v-if="dropDownSenders.length > 0"
                                            >
                                                <li
                                                    class="Sender"
                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                    :key="index"
                                                    @click="showSenderName(index)"
                                                    @mouseenter="senderHover"
                                                >
                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                </li>
                                            </ul>

                                            <div class="valid-feedback" v-if="!errors.partner_id">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.partner_id.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.partner_id.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                            <template v-if="errors.partner_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.partner_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-10" class="control-label">{{ $t('general.companysystempath') }}</label>
                                            <input
                                                type="url"
                                                class="form-control"
                                                v-model.number="$v.create.url.$model"
                                                :class="{
                                                'is-invalid':$v.create.url.$error || errors.url,
                                                'is-valid':!$v.create.url.$invalid && !errors.url
                                            }"
                                                :placeholder="$t('general.companysystempath')" id="field-10"
                                            />
                                            <div class="valid-feedback" v-if="!errors.url">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.url.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.url.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.url.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.url.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.url.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.url.url" class="invalid-feedback">{{ $t('general.Itmustbeyourlink') }}</div>
                                            <template v-if="errors.url">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.url" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-11" class="control-label">{{ $t('general.website') }}</label>
                                            <input
                                                type="url"
                                                class="form-control"
                                                v-model.number="$v.create.website.$model"
                                                :class="{
                                                'is-invalid':$v.create.website.$error || errors.website,
                                                'is-valid':!$v.create.website.$invalid && !errors.website
                                            }"
                                                :placeholder="$t('general.website')" id="field-11"
                                            />
                                            <div class="valid-feedback" v-if="!errors.website">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.website.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.website.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.website.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.website.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.website.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.website.url" class="invalid-feedback">{{ $t('general.Itmustbeyourlink') }}</div>
                                            <template v-if="errors.website">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.website" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-12" class="control-label">{{ $t('general.address') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model.number="$v.create.address.$model"
                                                :class="{
                                                'is-invalid':$v.create.address.$error || errors.address,
                                                'is-valid':!$v.create.address.$invalid && !errors.address
                                            }"
                                                :placeholder="$t('general.address')" id="field-12"
                                            />
                                            <div class="valid-feedback" v-if="!errors.address">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.address.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.address.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.address.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.address.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.address.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.address">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.address" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-4">
                                        <label class="mb-1">{{ $t('company.LogoFileUpload') }}</label>
                                        <div
                                            class="dropzone-custom position-relative"
                                            :style="{minHeight: !isDrop? '160px':'160px'}"
                                            @dragenter.prevent="onDragEnter"
                                            @dragleave.prevent="onDragLeave"
                                            @dragover.prevent
                                            @drop.prevent.stop="onDrop"
                                        >
                                            <div
                                                class="dropzone-content text-center"
                                                v-if="!isDrop"
                                            >
                                                <div class="dropzone-icon">
                                                    <i class="fas fa-cloud-download-alt"></i>
                                                </div>
                                                <h3>{{ $t('general.Dropfileshereorclicktoupload') }}</h3>
                                                <p>{{ $t('general.Dropfileshereorclicktoupload') }}</p>
                                            </div
                                            >

                                            <input
                                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                                type="file"
                                                id="uploadImageCreate"
                                                @change.prevent="onImageChanged"
                                                class="input-file-upload position-absolute"
                                                :class="{
                                                    'is-invalid':$v.create.logo.$error || errors.logo,
                                                    'is-valid':!$v.create.logo.$invalid && !errors.logo
                                                }"
                                            >

                                            <template  v-if="isDrop && image">
                                                <div class="dropzone-previews mt-3 position-relative">
                                                    <div class="card mt-1 mb-0 shadow-none border">
                                                        <div class="p-2">
                                                            <div class="row align-items-center">
                                                                <div class="col-auto">
                                                                    <img data-dz-thumbnail :src="image" class="avatar-sm rounded bg-light" alt="">
                                                                </div>
                                                                <div class="col pl-0">
                                                                    <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name>
                                                                        {{ create.logo.name }}
                                                                    </a>
                                                                    <p class="mb-0" data-dz-size>{{ create.logo.size }}</p>
                                                                </div>
                                                                <div class="col-auto">
                                                                    <!-- Button -->
                                                                    <a
                                                                       href="javascript:void(0);"
                                                                       class="btn btn-link btn-lg text-muted"
                                                                       data-dz-remove
                                                                       @click.prevent="deleteImageCreate"
                                                                    >
                                                                        <i class="fe-x"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>

                                        </div>
                                        <div v-if="!$v.create.logo.required && $v.create.logo.$error" class="text-danger">{{ $t('general.fieldIsRequired') }}</div>
                                        <div v-if="!$v.create.type.imgValid && $v.create.type.$error" class="text-danger">{{ $t('general.ItmustbeyourImage') }}</div>
                                        <template v-if="errors.logo">
                                            <ErrorMessage v-for="(errorMessage,index) in errors.logo" :key="index">{{ errorMessage }}</ErrorMessage>
                                        </template>
                                    </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-end">
                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                    <b-button  variant="success" type="submit" class="mx-1" v-if="!isLoader && isButton">
                                        {{ $t('general.Add') }}
                                    </b-button>

                                    <b-button variant="success" class="mx-1" disabled v-else>
                                        <b-spinner small></b-spinner>
                                        <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                    </b-button>

                                    <b-button variant="secondary" type="button" v-if="isButton" @click.prevent="resetModalHidden">
                                        {{ $t('general.Cancel') }}
                                    </b-button>
                                </div>
                            </form>
                        </b-modal>
                        <!--  /create   -->

                        <!-- start .table-responsive-->
                        <div class="table-responsive mb-3 custom-table-theme position-relative">

                            <!--       start loader       -->
                            <loader size="large" v-if="isLoader" />
                            <!--       end loader       -->

                            <table class="table table-borderless table-hover table-centered m-0">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>{{ $t('general.Name') }}</th>
                                    <th>{{ $t('general.Name_en') }}</th>
                                    <th>{{ $t('login.Emailaddress') }}</th>
                                    <th>{{ $t('partner.partner') }}</th>
                                    <th>{{ $t('general.mobile_no') }}</th>
                                    <th>{{ $t('general.Status') }}</th>
                                    <th>{{ $t('general.Action') }}</th>
                                </tr>
                                </thead>
                                <tbody v-if="companies.length > 0">
                                <tr v-for="(data,index) in companies" :key="data.id">
                                    <td>{{ 1 + index }}</td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>{{ data.name_e }}</td>
                                    <td>{{ data.email }}</td>
                                    <td>{{ $i18n.locale == 'ar'? data.partner.name : data.partner.name_e}}</td>
                                    <td>{{ data.phone }}</td>
                                    <td>
                                        <span :class="[
                                            data.is_active == 'active' ?
                                            'bg-soft-success text-success':
                                            'bg-soft-danger  text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_active == 'active' ? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
                                        </span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);"
                                           class="btn btn-xs btn-secondary custom-btn-1"
                                           @click="$bvModal.show(`modal-edit-${data.id}`)"
                                        >
                                            <i class="mdi mdi-pencil"></i>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            class="btn btn-xs btn-danger custom-btn-1"
                                            @click.prevent="deletecompany(data.id,index)"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </a>

                                        <!--  edit   -->
                                        <b-modal
                                            :id="`modal-edit-${data.id}`"
                                            :title="$t('company.editcompany')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            size="lg"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form  @submit.stop.prevent="editSubmit(data.id,index)">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-17" class="control-label">{{ $t('general.Name') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name.$error || errors.name,
                                                                    'is-valid':!$v.edit.name.$invalid && !errors.name
                                                                }"
                                                                :placeholder="$t('general.Name')" id="edit-17"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.name">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.name">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.name_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name_e.$error || errors.name_e,
                                                                    'is-valid':!$v.edit.name_e.$invalid && !errors.name_e
                                                                }"
                                                                :placeholder="$t('general.Name_en')" id="edit-2"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.name_e">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name_e.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.name_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-3" class="control-label">{{ $t('login.Emailaddress') }}</label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.email.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.email.$error || errors.email,
                                                                    'is-valid':!$v.edit.email.$invalid && !errors.email
                                                                }"
                                                                :placeholder="$t('login.Emailaddress')" id="edit-3"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.email">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.email.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.email.email" class="invalid-feedback">{{ $t('general.PleaseEnterValidEmail') }}</div>
                                                            <div v-if="!$v.edit.email.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.email.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.email.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.email.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.email">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-332">{{ $t('general.Status') }}</label>
                                                            <select
                                                                class="custom-select"
                                                                id="edit-332"
                                                                v-model="$v.edit.is_active.$model"
                                                                :class="{
                                                                        'is-invalid':$v.edit.is_active.$error || errors.is_active,
                                                                        'is-valid':!$v.edit.is_active.$invalid && !errors.is_active
                                                                    }"
                                                                 >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option value="active">{{ $t('general.Active') }}</option>
                                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                                            </select>
                                                            <div class="valid-feedback" v-if="!errors.is_active">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.is_active.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <template v-if="errors.is_active">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-7" class="control-label">{{ $t('general.mobile_no') }}</label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                v-model.number="$v.edit.phone.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.phone.$error || errors.phone,
                                                                    'is-valid':!$v.edit.phone.$invalid && !errors.phone
                                                                }"
                                                                :placeholder="$t('general.mobile_no')" id="edit-7"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.phone">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.phone.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.phone.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.phone.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.phone.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.phone.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.phone.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                                            <template v-if="errors.phone">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-5" class="control-label">{{ $t('general.taxnumber') }}</label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                v-model.number="$v.edit.tax_id.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.tax_id.$error || errors.tax_id,
                                                                    'is-valid':!$v.edit.tax_id.$invalid && !errors.tax_id
                                                                }"
                                                                :placeholder="$t('general.taxnumber')" id="edit-5"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.tax_id">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.tax_id.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.tax_id.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.tax_id.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.tax_id.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.tax_id.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.tax_id.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                                            <template v-if="errors.tax_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.tax_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-6" class="control-label">{{ $t('general.Valueaddedregistrationnumber') }}</label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                v-model.number="$v.edit.vat_no.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.vat_no.$error || errors.vat_no,
                                                                    'is-valid':!$v.edit.vat_no.$invalid && !errors.vat_no
                                                                }"
                                                                :placeholder="$t('general.Valueaddedregistrationnumber')" id="edit-6"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.vat_no">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.vat_no.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.vat_no.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.vat_no.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.vat_no.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.vat_no.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.vat_no.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                                            <template v-if="errors.vat_no">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.vat_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-8" class="control-label">{{ $t('general.CommercialRecord') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.cr.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.cr.$error || errors.cr,
                                                                    'is-valid':!$v.edit.cr.$invalid && !errors.cr
                                                                }"
                                                                :placeholder="$t('general.CommercialRecord')" id="edit-8"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.cr">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.cr.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.cr.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.cr.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.cr.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.cr.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.cr">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.cr" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group position-relative">
                                                            <label for="edit-9" class="control-label">{{ $t('partner.partner') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control input-Sender"
                                                                v-model.trim="edit.search"
                                                                @input="searchSender"
                                                                @blur.prevent="ClickDropdown"
                                                                @focus="isButton = false"
                                                                :class="{
                                                                    'is-invalid':$v.edit.partner_id.$error || errors.partner_id,
                                                                    'is-valid':!$v.edit.partner_id.$invalid && !errors.partner_id
                                                                }"
                                                                :placeholder="$t('partner.partner')" id="edit-9"
                                                            />

                                                            <ul class="dropdown-search list-unstyled sender-search"
                                                                v-if="dropDownSenders.length && !isButton"
                                                            >
                                                                <li
                                                                    class="Sender"
                                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                                    :key="index"
                                                                    @click="showSenderName(index)"
                                                                    @mouseenter="senderHover"
                                                                >
                                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                                </li>
                                                            </ul>

                                                            <div class="valid-feedback" v-if="!errors.partner_id">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.partner_id.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.partner_id.integer" class="invalid-feedback">{{ $t('general.fieldIsInteger') }}</div>
                                                            <template v-if="errors.partner_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.partner_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-10" class="control-label">{{ $t('general.companysystempath') }}</label>
                                                            <input
                                                                type="url"
                                                                class="form-control"
                                                                v-model.number="$v.edit.url.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.url.$error || errors.url,
                                                                    'is-valid':!$v.edit.url.$invalid && !errors.url
                                                                }"
                                                                :placeholder="$t('general.companysystempath')" id="edit-10"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.url">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.url.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.url.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.url.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.url.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.url.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.url.url" class="invalid-feedback">{{ $t('general.Itmustbeyourlink') }}</div>
                                                            <template v-if="errors.url">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.url" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-11" class="control-label">{{ $t('general.website') }}</label>
                                                            <input
                                                                type="url"
                                                                class="form-control"
                                                                v-model.number="$v.edit.website.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.website.$error || errors.website,
                                                                    'is-valid':!$v.edit.website.$invalid && !errors.website
                                                                }"
                                                                :placeholder="$t('general.website')" id="edit-11"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.website">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.website.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.website.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.website.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.website.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.website.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.website.url" class="invalid-feedback">{{ $t('general.Itmustbeyourlink') }}</div>
                                                            <template v-if="errors.website">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.website" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-12" class="control-label">{{ $t('general.address') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model.number="$v.edit.address.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.address.$error || errors.address,
                                                                    'is-valid':!$v.edit.address.$invalid && !errors.address
                                                                }"
                                                                :placeholder="$t('general.address')" id="edit-12"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.address">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.address.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.address.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.address.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.address.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.address.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="edit.address">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.address" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 my-4">
                                                        <label class="mb-1">{{ $t('company.LogoFileUpload') }}</label>
                                                        <div
                                                            class="dropzone-custom position-relative"
                                                            :style="{minHeight: !isDrop? '160px':'160px'}"
                                                            @dragenter.prevent="onDragEnterEdit"
                                                            @dragleave.prevent="onDragLeaveEdit"
                                                            @dragover.prevent
                                                            @drop.prevent.stop="onDropEdit"
                                                        >
                                                            <div
                                                                class="dropzone-content text-center"
                                                                v-if="isDrop && !edit.isImage"
                                                            >
                                                                <div class="dropzone-icon">
                                                                    <i class="fas fa-cloud-download-alt"></i>
                                                                </div>
                                                                <h3>{{ $t('general.Dropfileshereorclicktoupload') }}</h3>
                                                                <p>{{ $t('general.Dropfileshereorclicktoupload') }}</p>
                                                            </div
                                                            >

                                                            <input
                                                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                                                type="file"
                                                                @change.prevent="onImageChangedEdit"
                                                                class="input-file-upload position-absolute"
                                                                :class="{
                                                                        'is-invalid':$v.edit.logo.$error || errors.logo,
                                                                        'is-valid':!$v.edit.logo.$invalid && !errors.logo
                                                                    }"
                                                                >

                                                            <div class="dropzone-previews mt-3 position-relative" v-if="edit.isImage">
                                                                <div class="card mt-1 mb-0 shadow-none border">
                                                                    <div class="p-2">
                                                                        <div class="row align-items-center">
                                                                            <div class="col-auto">
                                                                                <img
                                                                                    data-dz-thumbnail
                                                                                    :src="edit.file?edit.file:'#'"
                                                                                    class="avatar-sm rounded bg-light"
                                                                                    alt=""
                                                                                >
                                                                            </div>
                                                                            <div class="col pl-0"></div>
                                                                            <div class="col-auto"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <template  v-if="isDrop && image">
                                                                <div class="dropzone-previews mt-3 position-relative">
                                                                    <div class="card mt-1 mb-0 shadow-none border">
                                                                        <div class="p-2">
                                                                            <div class="row align-items-center">
                                                                                <div class="col-auto">
                                                                                    <img data-dz-thumbnail :src="image" class="avatar-sm rounded bg-light" alt="">
                                                                                </div>
                                                                                <div class="col pl-0">
                                                                                    <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name>
                                                                                        {{ edit.logo.name }}
                                                                                    </a>
                                                                                    <p class="mb-0" data-dz-size>{{ edit.logo.size }}</p>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <!-- Button -->
                                                                                    <a
                                                                                        href="javascript:void(0);"
                                                                                        class="btn btn-link btn-lg text-muted"
                                                                                        data-dz-remove
                                                                                        @click.prevent="deleteImageEdit"
                                                                                    >
                                                                                        <i class="fe-x"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </template>

                                                        </div>
                                                        <template v-if="errors.logo">
                                                            <ErrorMessage v-for="(errorMessage,index) in errors.logo" :key="index">{{ errorMessage }}</ErrorMessage>
                                                        </template>
                                                    </div>
                                                </div>

                                                <div class="mt-1 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button  variant="success" type="submit" class="mx-1" v-if="!isLoader && isButton">
                                                        {{ $t('general.Edit') }}
                                                    </b-button>

                                                    <b-button variant="success" class="mx-1" disabled v-else>
                                                        <b-spinner small></b-spinner>
                                                        <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                    </b-button>

                                                    <b-button
                                                        variant="secondary"
                                                        type="button"
                                                        v-if="isButton"
                                                        @click.prevent="$bvModal.hide(`modal-edit-${data.id}`)"
                                                    >
                                                        {{ $t('general.Cancel') }}
                                                    </b-button>
                                                </div>
                                            </form>
                                        </b-modal>
                                        <!--  /edit   -->
                                    </td>
                                </tr>
                                </tbody>
                                <tbody v-else>
                                <tr>
                                    <th class="text-center" colspan="7">{{ $t('general.notDataFound') }}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- end .table-responsive-->

                        <!-- start Pagination -->
                        <template v-if="companiesPagination">
                            <pagination-laravel
                                :data="companiesPagination"
                                @pagination-change-page="getData"
                                :limit="3"
                            >
                                <template #prev-nav>
                                    <span>&lt; {{ $t('general.Previous') }}</span>
                                </template>
                                <template #next-nav>
                                    <span>{{ $t('general.Next') }} &gt;</span>
                                </template>
                            </pagination-laravel>
                        </template>
                        <!-- end Pagination -->

                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style>
    .dropzone-custom {border: 1px dashed;padding: 16px;cursor: pointer;}
    .dropzone-custom .dropzone-content .dropzone-icon i{font-size: 37px;}
    .dropzone-custom .dropzone-content h3{font-size: 28px;}
    .dropzone-custom .input-file-upload {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 10;
    }
    .dropzone-custom .dropzone-previews {z-index: 15;cursor: context-menu}

    .dropdown-search{
        position: absolute;
        width: 100%;
        background-color: #fafafa;
        border: 1px solid #d9d3d3;
        top: 71px;
        z-index: 10;
        padding: 0;
    }
    .dropdown-search li{
        padding: 5px;
    }
    .dropdown-search li:not(:last-child){
        border-bottom: 1px solid #d9d3d3;
    }
    .dropdown-search li:hover{
        background-color: #f3f3f3;
        cursor: pointer;
    }
    .dropdown-search li.active{
        background-color: #f1f1f1;
        cursor: pointer;
    }
</style>
