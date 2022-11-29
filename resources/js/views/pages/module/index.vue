<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import startDate from "../../../helper/startDate";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import loader from "../../../components/loader";


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
        loader
    },
    data() {
        return {
            title: `${this.$t('module.module')}`,
            items: [
                {
                    text: "Minton",
                    href: "/",
                },
                {
                    text: `${this.$t('module.module')}`,
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
                is_active: null
            },
            edit: {
                name: '',
                name_e: '',
                parent_id: '',
                is_active: null
            },
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            is_active: {required}
        },
        edit: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100)},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100)},
            is_active: {required}
        },
    },
    watch: {
        /**
         * Total no. of records
         */
        per_page(after,befour){
            this.getData();
        },
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
            this.create =  {name: '', name_e: '', parent_id: '', is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.$refs['create'].hide();
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {name: '', name_e: '', parent_id: '', is_active: null};
            this.$nextTick(() => { this.$v.$reset() });
            this.getParent();
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
                adminApi.post(`/modules`,this.create)
                    .then((res) => {
                        console.log(res);
                        this.$refs['create'].hide();
                    })
                    .catch((err) => {
                        console.log(err.response);
                    }).finally(() => {
                        this.isLoader = false;
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Addedsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
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
                adminApi.put(`/modules/${id}`,this.edit)
                    .then((res) => {
                        let l = res.data.data;
                        this.$bvModal.hide(`modal-edit-${id}`)
                    })
                    .catch((err) => {
                        console.log(err.response);
                    }).finally(() => {
                        this.isLoader = false;
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Editsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
                    });
            }
        },
        /**
         *  get parent
         */
        getParent(){
            adminApi.get(`/modules?parent_id=${0}&is_active=active`)
                .then((res) => {
                    this.parents = res.data.data;
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
            this.getParent();
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            let module = this.modules.find(e => id == e.id );
            module.name = this.edit.name;
            module.name_e = this.edit.name_e;
            module.is_active = this.edit.is_active;
            module.parent_id = this.edit.parent_id;
            this.edit = {
                name: '',
                name_e: '',
                parent_id: '',
                is_active: null
            };
        }
    },
  page: {
    title: "Module",
    meta: [{ name: "description", content: 'Module' }],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
        title: "Module",
        items: [
            {
                text: "Minton",
                href: "/",
            },
            {
                text: "Modules",
                active: true,
            },
        ],
        revenueData: [
            {
                marketplaces: "Themes Market",
                date: "Oct 15, 2018",
                tax: "$125.23",
                payout: "$5848.68",
                status: "Upcoming"
            },
            {
                marketplaces: "Freelance",
                date: "Oct 12, 2018",
                tax: "$78.03",
                payout: "$5848.68",
                status: "Paid"
            },
            {
                marketplaces: "Share Holding",
                date: "Oct 10, 2018",
                tax: "$358.24",
                payout: "$815.89",
                status: "Paid"
            },
            {
                marketplaces: "Envato's Affiliates",
                date: "Oct 03, 2018",
                tax: "$18.78",
                payout: "$248.75",
                status: "Overdue"
            },
            {
                marketplaces: "Marketing Revenue",
                date: "Sep 21, 2018",
                tax: "$185.36",
                payout: "$978.21",
                status: "Upcoming"
            },
            {
                marketplaces: "Advertise Revenue",
                date: "Sep 15, 2018",
                tax: "$29.56",
                payout: "$358.10",
                status: "Paid"
            }
        ]
    }
  },
  computed: {
    /**
     * Total no. of records
     */

  },
  mounted() {

  },
  methods: {
    /**
     * Search the table data with search input
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
                                v-b-modal.modal-responsive
                                variant="success"
                            >
                                {{ $t('general.Create') }}
                            </b-button>
                        </div>

                        <div class="row justify-content-between align-items-center mb-3">
                            <div class="col-lg-3 col-6" style="font-weight: 500">
                                Show
                                <select
                                    class="custom-select custom-select-sm mr-sm-2"
                                    v-model="per_page"
                                    style="display: inline-block;width:auto"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                                entries
                            </div>
                            <div class="col-lg-3 col-6" style="font-weight: 500">
                                Search:
                                <input
                                    class="form-control form-control-sm"
                                    style="display: inline-block;width:auto"
                                    type="text"
                                    v-model.trim="search"
                                    placeholder="Search..."
                                >
                            </div>
                        </div>

                        <!--  create   -->
                        <b-modal
                            id="modal-responsive"
                            :title="$t('module.addmodule')"
                            title-class="font-18"
                            body-class="p-4"
                            ref="create"
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
                                                v-model="$v.create.name.$model"
                                                :class="{
                                                'is-invalid':$v.create.name.$error,
                                                'is-valid':!$v.create.name.$invalid
                                            }"
                                                :placeholder="$t('general.Name')" id="field-1"
                                            />
                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.name.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="$v.create.name_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.name_e.$error,
                                                'is-valid':!$v.create.name_e.$invalid
                                            }"
                                                :placeholder="$t('general.Name_en')" id="field-2"
                                            />
                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.name_e.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
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
                                                'is-invalid':$v.create.is_active.$error,
                                                'is-valid':!$v.create.is_active.$invalid
                                            }"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option value="active">{{ $t('general.Active') }}</option>
                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                            </select>
                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                            <div v-if="!$v.create.is_active.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-1">
                                        <div class="form-group">
                                            <label class="my-1 mr-2" for="inlineFormCustomSelectPdsred">{{ $t('general.IdParent') }}</label>
                                            <select
                                                class="custom-select my-1 mr-sm-2"
                                                id="inlineFormCustomSelectPdsred"
                                                v-model="create.parent_id"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option v-for="parent in parents" :value="parent.id" :key="parent.id">
                                                    {{ $i18n.locale == 'ar'? parent.name: parent.name_e}}
                                                </option>
                                            </select>
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
                                    <th>{{ $t('general.Status') }}</th>
                                    <th>{{ $t('general.Action') }}</th>
                                </tr>
                                </thead>
                                <tbody v-if="modules.length > 0">
                                <tr v-for="(data,index) in modules" :key="data.date">
                                    <td>{{ 1 + index }}</td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>{{ data.name_e }}</td>
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
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-u-1" class="control-label">{{ $t('general.Name') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model="$v.edit.name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name.$error,
                                                                    'is-valid':!$v.edit.name.$invalid
                                                                }"
                                                                :placeholder="$t('general.Name')" id="field-u-1"
                                                            />
                                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-u-2" class="control-label">{{ $t('general.Name_en') }}</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                v-model="$v.edit.name_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name_e.$error,
                                                                    'is-valid':!$v.edit.name_e.$invalid
                                                                }"
                                                                :placeholder="$t('general.Name_en')" id="field-u-2"
                                                            />
                                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.name_e.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                            <div v-if="!$v.edit.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
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
                                                                    'is-invalid':$v.edit.is_active.$error,
                                                                    'is-valid':!$v.edit.is_active.$invalid
                                                                }"
                                                                >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option value="active">{{ $t('general.Active') }}</option>
                                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                                            </select>
                                                            <div class="valid-feedback">{{ $t('general.Looksgood') }}</div>
                                                            <div v-if="!$v.edit.is_active.required" class="invalid-feedback">{{ $t('general.fieldIsRequired') }}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-1">
                                                        <div class="form-group">
                                                            <label class="my-1 mr-2" for="inlineFormCustomSelectPred">{{ $t('general.IdParent') }}</label>
                                                            <select
                                                                class="custom-select my-1 mr-sm-2"
                                                                id="inlineFormCustomSelectPred"
                                                                v-model="edit.parent_id"
                                                            >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option v-for="parent in parents" :value="parent.id" :key="parent.id">
                                                                    {{ $i18n.locale == 'ar'? parent.name: parent.name_e}}
                                                                </option>
                                                            </select>
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

                                                    <b-button variant="secondary" type="button" @click.prevent="resetModal(data.id)">
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
                        <!-- end Pagination -->

                    </div>
                </div>
            </div>
        </div>
    </Layout>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-between align-items-center mb-3">
                <h4 class="header-title">Companies Table</h4>
                <b-button
                    v-b-modal.modal-responsive
                    variant="success"
                >
                    Create
                </b-button>
            </div>

              <div class="row justify-content-between align-items-center mb-3">
                  <div class="col-lg-3 col-6" style="font-weight: 500">
                      Show
                      <select
                          class="custom-select custom-select-sm mr-sm-2"
                          style="display: inline-block;width:auto"
                      >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                      </select>
                      entries
                  </div>
                  <div class="col-lg-3 col-6" style="font-weight: 500">
                      Search:
                      <input
                          class="form-control form-control-sm"
                          style="display: inline-block;width:auto"
                          type="text"
                          placeholder="Search..."
                      >
                  </div>
              </div>

              <!--  create   -->
              <b-modal
                  id="modal-responsive"
                  title="Modal Content is Responsive"
                  title-class="font-18"
                  body-class="p-4"
              >
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="field-1" class="control-label">Name</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="John"
                              />
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="field-2" class="control-label">Surname</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Doe"
                              />
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="form-group">
                              <label for="field-3" class="control-label">Address</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Address"
                              />
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="form-group">
                              <label for="field-4" class="control-label">City</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Boston"
                              />
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                              <label for="field-5" class="control-label">Country</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="United States"
                              />
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                              <label for="field-6" class="control-label">Zip</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="123456"
                              />
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="form-group no-margin">
                              <label for="field-7" class="control-label"
                              >Personal Info</label
                              >
                              <textarea
                                  class="form-control"
                                  placeholder="Write something about yourself"
                              ></textarea>
                          </div>
                      </div>
                  </div>
              </b-modal>
              <!--  /create   -->

              <!-- start .table-responsive-->
              <div class="table-responsive mb-0 custom-table-theme">
                  <table class="table table-borderless table-hover table-centered m-0">
                      <thead>
                      <tr>
                          <th>Marketplaces</th>
                          <th>Date</th>
                          <th>US Tax Hold</th>
                          <th>Payouts</th>
                          <th>Status</th>
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="data in revenueData" :key="data.date">
                          <td>
                              <h5 class="m-0 font-weight-normal">{{ data.marketplaces }}</h5>
                          </td>
                          <td>{{ data.date }}</td>
                          <td>{{ data.tax }}</td>
                          <td>{{ data.payout }}</td>
                          <td>
                            <span :class="{
                                'bg-soft-success text-success': `${data.status}` === 'Paid',
                                'bg-soft-warning text-warning':
                                  `${data.status}` === 'Upcoming',
                                'bg-soft-danger  text-danger':
                                  `${data.status}` === 'Overdue'
                              }" class="badge">{{ data.status }}
                            </span>
                          </td>
                          <td>
                              <a href="javascript:void(0);" class="btn btn-xs btn-secondary custom-btn-1">
                                  <i class="mdi mdi-pencil"></i>
                              </a>
                              <a href="javascript:void(0);" class="btn btn-xs btn-danger custom-btn-1">
                                  <i class="fas fa-trash"></i>
                              </a>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <!-- end .table-responsive-->

          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
