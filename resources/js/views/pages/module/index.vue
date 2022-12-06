<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import alphaArabic  from "../../../helper/alphaArabic";
import alphaEnglish  from "../../../helper/alphaEnglish";

/**
 * Advanced Table component
 */
export default {
    page: {
        title: "Module",
        meta: [{ name: "description", content: 'Module' }],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader
    },
    data() {
        return {
            title: `module.module`,
            items: [
                {
                    text: "alshamel",
                    to: {name: "home"},
                },
                {
                    text: `module.module`,
                    active: true,
                },
            ],
            per_page: 10,
            search: '',
            debounce: {},
            modulesPagination: {},
            modules: [],
            parents: [],
            enabled3: false,
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                parent_id: 0,
                is_active: null,
                search: ''
            },
            edit: {
                name: '',
                name_e: '',
                parent_id: 0,
                is_active: null,
                search: ''
            },
            errors: {},
            dropDownSenders: [],
            isButton: true
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100),alphaEnglish},
            is_active: {required}
        },
        edit: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100),alphaEnglish},
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
         *  get Data module
         */
        getData(page = 1){

            this.isLoader = true;

            adminApi.get(`/modules?page=${page}&per_page=${this.per_page}&search=${this.search}`)
                .then((res) => {
                    let l = res.data;
                    this.modules = l.data;
                    this.modulesPagination = l.pagination;
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
         *  delete module
         */
        deleteModule(id,index) {
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

                    adminApi.delete(`/modules/${id}`)
                        .then((res) => {
                            this.modules.splice(index,1);
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
            this.create =  {name: '', name_e: '', parent_id: 0, is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {name: '', name_e: '', parent_id: 0, is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
        },
        /**
         *  create module
         */
        AddSubmit(){
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.post(`/modules`,this.create)
                    .then((res) => {
                        this.$bvModal.hide(`create`);
                        this.getData();
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
                        if(err.response.data){
                            this.errors = err.response.data.errors;
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        }
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }

        },
        /**
         *  edit module
         */
        editSubmit(id){
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                let {name,name_e,parent_id,is_active} = this.edit;
                adminApi.put(`/modules/${id}`,{name,name_e,parent_id,is_active})
                    .then((res) => {
                        this.$bvModal.hide(`modal-edit-${id}`);
                        this.getData();
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
                        if(err.response.data){
                            this.errors = err.response.data.errors;
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        }
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }
        },
        /**
         *  get parent
         */
        getParent(){
            adminApi.get(`/modules?parent_id=${0}&is_active=active`)
                .then((res) => {
                    this.dropDownSenders = res.data.data;
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${this.$t('general.Error')}`,
                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                    });
                })
        },
        /**
         *   show Modal (edit)
         */
        resetModalEdit(id){
            let module = this.modules.find(e => id == e.id );
            this.edit.name = module.name;
            this.edit.name_e = module.name_e;
            this.edit.is_active = module.is_active;
            this.edit.parent_id = module.parent_id;
            this.errors = {};
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            this.errors = {};
            this.edit = {
                name: '',
                name_e: '',
                parent_id: 0,
                is_active: null
            };
        },
        /**
         *  start  dropdown Google
         */
        searchSender(){
            this.dropDownSenders = [];
            this.create.parent_id = 0;
            this.edit.parent_id = 0;
            if(this.create.search || this.edit.search){
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {
                    this.getParent();
                }, 400);
            }else{
                this.dropDownSenders = [];
            }
            this.isButton = false;
        },

        showSenderName(index){
            let item = this.dropDownSenders[index];
            this.create.parent_id = item.id;
            this.create.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.edit.parent_id = item.id;
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
                        this.isButton = true;
                        this.dropDownSenders = [];
                    }
                }else {
                    this.isButton = true;
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
            }else {
                this.isButton = true;
            }
        }
        /**
         *  end  dropdown Google
         */

    },
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
                            <h4 class="header-title"> {{ $t('module.ModulesTable') }}</h4>

                            <b-button
                                v-b-modal.create
                                variant="success"
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
                            :title="$t('module.addmodule')"
                            title-class="font-18"
                            body-class="p-4"
                            :hide-footer="true"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form  @submit.stop.prevent="AddSubmit">
                                <div class="row">
                                    <div class="col-md-6 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">{{ $t('general.Name') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="$v.create.name.$model"
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
                                            <div v-if="!$v.create.name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.name">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="$v.create.name_e.$model"
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
                                            <div v-if="!$v.create.name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.name_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-1">
                                        <div class="form-group">
                                            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">{{ $t('general.Status') }}</label>
                                            <select
                                                class="custom-select my-1 mr-sm-2"
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
                                    <div class="col-md-6 mt-1 position-relative">
                                        <div class="form-group">
                                            <label class="my-1 mr-2" >{{ $t('general.IdParent') }}</label>
                                            <input
                                                class="form-control input-Sender"
                                                v-model.trim="create.search"
                                                @input="searchSender"
                                                @blur.prevent="ClickDropdown"
                                                @focus="isButton = false"
                                                :placeholder="$t('general.IdParent')" id="field-9"
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

                                        </div>
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

                                    <b-button variant="secondary" type="button" @click.prevent="resetModalHidden">
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
                                    <th>{{ $t('general.Status') }}</th>
                                    <th>{{ $t('general.Action') }}</th>
                                </tr>
                                </thead>
                                <tbody v-if="modules.length > 0">
                                <tr v-for="(data,index) in modules" :key="data.id">

                                    <td>{{ 1 + index }}</td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>{{ data.name_e }}</td>
                                    <td>
                                        <span :class="[
                                            data.is_active == 'active' ?
                                            'bg-soft-success text-success':
                                            'bg-soft-danger  text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_active == 'active'? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
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
                                            @click.prevent="deleteModule(data.id,index)"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </a>

                                        <!--  edit   -->
                                        <b-modal
                                            :id="`modal-edit-${data.id}`"
                                            :title="$t('module.editmodule')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form  @submit.stop.prevent="editSubmit(data.id)">
                                                <div class="row">
                                                    <div class="col-md-6 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="field-u-1" class="control-label">{{ $t('general.Name') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model="$v.edit.name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name.$error || errors.name,
                                                                    'is-valid':!$v.edit.name.$invalid && !errors.name
                                                                }"
                                                                :placeholder="$t('general.Name')" id="field-u-1"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.name">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <div v-if="!$v.edit.name.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.name">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="field-u-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model="$v.edit.name_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name_e.$error || errors.name_e,
                                                                    'is-valid':!$v.edit.name_e.$invalid && !errors.name_e
                                                                }"
                                                                :placeholder="$t('general.Name_en')" id="field-u-2"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.name_e">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name_e.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.name_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-1">
                                                        <div class="form-group">
                                                            <label class="my-1 mr-2" for="inlineFormCustomSelectPrefs">{{ $t('general.Status') }}</label>
                                                            <select
                                                                class="custom-select my-1 mr-sm-2"
                                                                id="inlineFormCustomSelectPrefs"
                                                                v-model="$v.edit.is_active.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.is_active.$error || errors.is_active,
                                                                    'is-valid':!$v.edit.is_active.$invalid && !errors.is_active
                                                                }"
                                                                >
                                                                <option value="0" selected>{{ $t('general.Choose') }}...</option>
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
                                                    <div class="col-md-6 mt-1">
                                                        <div class="form-group">
                                                            <label class="my-1 mr-2">{{ $t('general.IdParent') }}</label>
                                                            <input
                                                                class="form-control input-Sender"
                                                                v-model.trim="edit.search"
                                                                @input="searchSender"
                                                                @blur.prevent="ClickDropdown"
                                                                @focus="isButton = false"
                                                                :placeholder="$t('general.IdParent')"
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
                                                        </div>
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
                                    <th class="text-center" colspan="5">{{ $t('general.notDataFound') }}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- end .table-responsive-->

                        <!-- start Pagination -->
                        <template v-if="modulesPagination">
                            <pagination-laravel
                            :data="modulesPagination"
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
