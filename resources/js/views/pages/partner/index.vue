<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import ErrorMessage from "../../../components/widgets/errorMessage";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer,email, sameAs } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import loader from "../../../components/loader";


/**
 * Advanced Table component
 */
export default {
    page: {
        title: "Partner",
        meta: [{ name: "description", content: 'Partner' }],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        loader,
        ErrorMessage
    },
    data() {
        return {
            title: `partner.partner`,
            items: [
                {
                    text: "alshamel",
                    to: {name: "home"},
                },
                {
                    text: `partner.partner`,
                    active: true,
                },
            ],
            per_page: 10,
            search: '',
            debounce: {},
            partnersPagination: {},
            partners: [],
            parents: [],
            enabled3: false,
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                email: '',
                password:'',
                repeatPassword:'',
                mobile_no:'',
                is_active: null
            },
            edit: {
                name: '',
                name_e: '',
                email: '',
                password:'',
                repeatPassword:'',
                mobile_no:'',
                is_active: null
            },
            errors: {}
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            email: {required,email,minLength: minLength(3),maxLength: maxLength(100)},
            password: {required,minLength: minLength(8),maxLength: maxLength(16)},
            repeatPassword: {required,sameAs: sameAs('password')},
            mobile_no: {required,minLength: minLength(9),maxLength: maxLength(18)},
            is_active: {required}
        },
        edit: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            email: {required,email,minLength: minLength(3),maxLength: maxLength(100)},
            password: {required,minLength: minLength(8),maxLength: maxLength(16)},
            repeatPassword: {required,sameAs: sameAs('password')},
            mobile_no: {required,minLength: minLength(9),maxLength: maxLength(18)},
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
    },
    methods: {
        /**
         *  get Data Partner
         */
        getData(page = 1){

            this.isLoader = true;

            adminApi.get(`/partners?page=${page}&per_page=${this.per_page}&search=${this.search}`)
                .then((res) => {
                    let l = res.data;
                    this.partners = l.data;
                    this.partnersPagination = l.pagination;
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
         *  delete Partner
         */
        deletePartner(id,index) {
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

                    adminApi.delete(`/partners/${id}`)
                        .then((res) => {
                            this.partners.splice(index,1);
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
            this.create =  {name: '', name_e: '', email: '', password:'', repeatPassword:'', mobile_no:'', is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.$bvModal.hide(`create`);
            this.errors = {};
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {name: '', name_e: '', email: '', password:'', repeatPassword:'', mobile_no:'', is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.getParent();
            this.errors = {};
        },
        /**
         *  create Partner
         */
        AddSubmit(){
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                adminApi.post(`/partners`,this.create)
                    .then((res) => {
                        this.$bvModal.hide(`create`);
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
         *  edit Partner
         */
        editSubmit(id){
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                adminApi.put(`/partners/${id}`,this.edit)
                    .then((res) => {
                        let l = res.data.data;
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
                        this.errors = err.response.data.errors;
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }
        },
        /**
         *   show Modal (edit)
         */
        resetModalEdit(id){
            let Partner = this.partners.find(e => id == e.id );
            this.edit.name = Partner.name;
            this.edit.name_e = Partner.name_e;
            this.edit.is_active = Partner.is_active;
            this.edit.email = Partner.email;
            this.edit.password = Partner.password;
            this.edit.repeatPassword = Partner.password;
            this.edit.mobile_no = Partner.mobile_no;
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            let Partner = this.partners.find(e => id == e.id );
            Partner.name = this.edit.name;
            Partner.name_e = this.edit.name_e;
            Partner.is_active = this.edit.is_active;
            Partner.email = this.edit.email;
            Partner.password = this.edit.password;
            Partner.mobile_no = this.edit.mobile_no;
            this.edit = {name: '', name_e: '', email: '', password:'', repeatPassword:'', mobile_no:'', is_active: null};
            this.errors = {};
        }
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
                            <h4 class="header-title"> {{ $t('partner.partnersTable') }}</h4>
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
                            :title="$t('partner.addpartner')"
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
                                            <label for="field-5" class="control-label">{{ $t('login.Password') }}</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                v-model.trim="$v.create.password.$model"
                                                :class="{
                                                'is-invalid':$v.create.password.$error || errors.password,
                                                'is-valid':!$v.create.password.$invalid && !errors.password
                                            }"
                                                :placeholder="$t('login.Password')" id="field-5"
                                            />
                                            <div class="valid-feedback" v-if="!errors.password">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.password.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.password.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.password.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.password.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.password.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.password">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.password" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-6" class="control-label">{{ $t('general.repeatPassword') }}</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                v-model.trim="$v.create.repeatPassword.$model"
                                                :class="{
                                                'is-invalid':$v.create.repeatPassword.$error || errors.repeatPassword,
                                                'is-valid':!$v.create.repeatPassword.$invalid && !errors.repeatPassword
                                            }"
                                                :placeholder="$t('general.repeatPassword')" id="field-6"
                                            />
                                            <div class="valid-feedback" v-if="!errors.repeatPassword">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.repeatPassword.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.repeatPassword.sameAs" class="invalid-feedback">{{ $t('general.samaAs') }} </div>
                                            <template v-if="errors.repeatPassword">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.repeatPassword" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-7" class="control-label">{{ $t('general.mobile_no') }}</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                v-model.trim="$v.create.mobile_no.$model"
                                                :class="{
                                                'is-invalid':$v.create.mobile_no.$error || errors.mobile_no,
                                                'is-valid':!$v.create.mobile_no.$invalid && !errors.mobile_no
                                            }"
                                                :placeholder="$t('general.mobile_no')" id="field-7"
                                            />
                                            <div class="valid-feedback" v-if="!errors.mobile_no">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.mobile_no.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.mobile_no.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.mobile_no.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.mobile_no.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.mobile_no.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.mobile_no">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.mobile_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-end">
                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                    <b-button  variant="success" type="submit" class="mx-1" v-if="!isLoader">
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
                                    <th>{{ $t('login.Emailaddress') }}</th>
                                    <th>{{ $t('general.Status') }}</th>
                                    <th>{{ $t('general.Action') }}</th>
                                </tr>
                                </thead>
                                <tbody v-if="partners.length > 0">
                                <tr v-for="(data,index) in partners" :key="data.date">
                                    <td>{{ 1 + index }}</td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>{{ data.name_e }}</td>
                                    <td>{{ data.email }}</td>
                                    <td>
                                        <span :class="[
                                            data.is_active ?
                                            'bg-soft-success text-success':
                                            'bg-soft-danger  text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_active ? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
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
                                            @click.prevent="deletePartner(data.id,index)"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </a>

                                        <!--  edit   -->
                                        <b-modal
                                            :id="`modal-edit-${data.id}`"
                                            :title="$t('partner.editpartner')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            size="lg"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form  @submit.stop.prevent="editSubmit(data.id)">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-1" class="control-label">{{ $t('general.Name') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name.$error || errors.name,
                                                                    'is-valid':!$v.edit.name.$invalid && !errors.name
                                                                }"
                                                                :placeholder="$t('general.Name')" id="edit-1"
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
                                                            <label for="edit-3" class="control-label">{{ $t('login.Emailaddress') }}</label>
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
                                                            <label for="edit-4">{{ $t('general.Status') }}</label>
                                                            <select
                                                                class="custom-select"
                                                                id="edit-4"
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
                                                            <label for="edit-5" class="control-label">{{ $t('login.Password') }}</label>
                                                            <input
                                                                type="password"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.password.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.password.$error || errors.password,
                                                                    'is-valid':!$v.edit.password.$invalid && !errors.password
                                                                }"
                                                                :placeholder="$t('login.Password')" id="edit-5"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.password">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.password.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.password.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.password.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.password.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.password.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.password">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.password" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-6" class="control-label">{{ $t('general.repeatPassword') }}</label>
                                                            <input
                                                                type="password"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.repeatPassword.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.repeatPassword.$error || errors.repeatPassword,
                                                                    'is-valid':!$v.edit.repeatPassword.$invalid && !errors.repeatPassword
                                                                }"
                                                                :placeholder="$t('general.repeatPassword')" id="edit-6"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.repeatPassword">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.repeatPassword.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.repeatPassword.sameAs" class="invalid-feedback">{{ $t('general.samaAs') }} </div>
                                                            <template v-if="errors.repeatPassword">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.repeatPassword" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-7" class="control-label">{{ $t('general.mobile_no') }}</label>
                                                            <input
                                                                type="password"
                                                                class="form-control"
                                                                v-model.trim="$v.edit.mobile_no.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.mobile_no.$error || errors.mobile_no,
                                                                    'is-valid':!$v.edit.mobile_no.$invalid && !errors.mobile_no
                                                                }"
                                                                :placeholder="$t('general.mobile_no')" id="edit-7"
                                                            />
                                                            <div class="valid-feedback" v-if="!errors.mobile_no">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.mobile_no.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.mobile_no.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.mobile_no.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.mobile_no.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.mobile_no.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.mobile_no">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.mobile_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-1 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button  variant="success" type="submit" class="mx-1" v-if="!isLoader">
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
                        <template v-if="partnersPagination">
                            <pagination-laravel
                                :data="partnersPagination"
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
