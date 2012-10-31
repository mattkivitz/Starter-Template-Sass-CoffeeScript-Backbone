module.exports = function(grunt){
grunt.initConfig({
	sass: {
		dist: {
			files: {
				'app/public/css/main.css': 'app/sass/main.sass'
			}
		},
		options: {
			'compass': true
		}
	},

	coffee: {
		compile: {
			files: {
				'app/public/scripts/*.js':'app/coffee/*.coffee'
			}
		}
	},

	watch: {
		sass: {
			files: ['app/sass/*'],
			tasks: 'sass'
		},
		coffee: {
			files:['app/coffee/*'],
			tasks: 'coffee'
		}

	}
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-coffee');
};

