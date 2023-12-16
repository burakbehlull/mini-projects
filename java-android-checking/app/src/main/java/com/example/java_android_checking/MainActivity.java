package com.example.java_android_checking;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
	EditText editText1, editText2;
    Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
		button = findViewById(R.id.button);
        editText1 = findViewById(R.id.editTextText);
        editText2 = findViewById(R.id.editTextText2);
    }

}