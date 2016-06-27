module.exports = function(grunt) {

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['js/*.js'],
                    dest: 'js/<%= pkg.name %>.js'
                }
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                dist: {
                    files: {
                        'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js']
                    }
                }
            },
            
            jshint: {
                 files: ['js/index.js' ],
                 options: {
                //这里是覆盖JSHint默认配置的选项
                   globals: {
                     jQuery: true,

                 }
                 }
            },
            less: {
              
                production: {
                    options: {

                        plugins: [
                            new(require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] }),
                            new(require('less-plugin-clean-css'))({ keepSpecialComments: 0 })
                           
                    ],

                },
                files: {
                    'css/index.css': 'index.less'
                }
              }
            
        }
    });

/*      
  grunt.loadNpmTasks('grunt-contrib-qunit');  
  
  */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
grunt.loadNpmTasks('grunt-contrib-less');


// grunt.registerTask('default', ['jshint', 'qunit', 'less', 'uglify']);
grunt.registerTask('default', ['jshint','uglify','less']);

};
