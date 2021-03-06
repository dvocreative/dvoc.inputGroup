(function(GB){

    var InputGroup = GB.getMethod('component').createClass({

        render : function() {

            var children = [];

            if (this.props.label) {
                children.push(GB.getMethod('component').createElement(
                    'label',
                    {
                        key : 'label'
                    },
                    this.props.label
                ));
            }

            children.push(GB.getMethod('component').createElement(
                GB.getResource('dvoc', 'Input'),
                {
                    type : this.props.type || 'text',
                    placeholder : this.props.placeholder || '',
                    name : this.props.name || ''
                }
            ));

            return GB.getMethod('component').createElement(
                'div',
                {
                    className : 'form-group'
                },
                children
            );

        }

    });

    GB.addResource('dvoc', 'InputGroup', InputGroup);

})(Gumball);